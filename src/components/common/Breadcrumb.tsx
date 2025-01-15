import React from "react";

type BreadcrumbProps = {
  links: { name: string; href: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <nav className="flex items-center gap-1 text-sm text-neutral-dark">
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <span>{link.name}</span>
          {index < links.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
