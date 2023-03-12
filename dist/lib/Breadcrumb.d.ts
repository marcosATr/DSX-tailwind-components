import React from "react";
export interface BreadcrumbProps {
    items: {
        linkComponent: React.ReactNode;
    }[];
}
export default function Breadcrumb({ items, }: BreadcrumbProps): JSX.Element;
