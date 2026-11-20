import Link from "next/link";
import type { SubService } from "../lib/services";
import { Photo } from "./Photo";

export function ServiceCards({ services }: { services: SubService[] }) {
  return (
    <div className="card-grid services-grid services-grid-spacing">
      {services.map((service) => (
        <Link key={service.title} href={service.href} className="card image-card">
          <Photo id={service.image} ratio="16 / 10" sizes="(max-width: 960px) 100vw, 33vw" />
          <div className="image-card-body">
            <div className="eyebrow">{service.subtitle}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <div className="service-card-link-wrap">
              <span className="service-card-link">Learn more →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
