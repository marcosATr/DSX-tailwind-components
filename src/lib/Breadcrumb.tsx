import React from "react";

interface BreadcrumbProps {
  items: {
    linkComponent: React.ReactNode;
  }[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <div className="flex items-center">
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <span className="text-sm text-primary hover:brightness-125">
              {item.linkComponent}
            </span>
            {index !== items.length - 1 && (
              <span className="mx-2 text-sm text-heading">
                /
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
//TODO: write breadcrumb story