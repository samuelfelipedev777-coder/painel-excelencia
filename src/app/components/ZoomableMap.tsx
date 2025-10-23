"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface GeoJsonProps {
  data: GeoJSON.FeatureCollection<any, any>;
}

export default function ZoomableMap({ data }: GeoJsonProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    const width = 975;
    const height = 610;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Limpa só na primeira vez

    const projection = d3.geoMercator().fitSize([width, height], data);
    const path = d3.geoPath().projection(projection);

    const g = svg.append("g").style("will-change", "transform"); // GPU para zoom

    // Zoom
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (event: any) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom as any);

    // Estados
    const states = g.append("g")
      .attr("cursor", "pointer")
      .selectAll("path")
      .data(data.features)
      .join("path")
      .attr("d", path)
      .attr("fill", "#F29F58")
      .attr("stroke", "#161618")
      .attr("stroke-width", 0.5)
      .on("click", function (event: any, d: GeoJSON.Feature<any, any>) {
        event.stopPropagation(); // evita reset ao clicar no estado

        // Reset cores
        states.attr("fill", "#F29F58");

        // Destacar o selecionado
        d3.select(this).attr("fill", "red");

        // Zoom para o estado clicado
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        const k = Math.min(
          8,
          0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)
        );
        const tx = width / 2 - k * (x0 + x1) / 2;
        const ty = height / 2 - k * (y0 + y1) / 2;

        svg.transition()
          .duration(500)
          .call(zoom.transform as any, d3.zoomIdentity.translate(tx, ty).scale(k));
      });

    // Resetar zoom e cores ao clicar fora
    svg.on("click", (event) => {
      if (event.target === svg.node()) {
        states.attr("fill", "#F29F58");
        svg.transition().duration(500).call(zoom.transform as any, d3.zoomIdentity);
      }
    });

  }, [data]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="610px"
      className="rounded-lg shadow-lg"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}