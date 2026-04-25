import Link from "next/link";

import ComingSoonRoute from "@/modules/components/common/ComingSoonRoute";

const servicePages = [
  { href: "/services/tax-filing", label: "Tax Filing" },
  { href: "/services/bookkeeping", label: "Bookkeeping" },
  { href: "/services/financial-planning", label: "Financial Planning" },
  { href: "/services/audit", label: "Audit" },
  { href: "/services/payroll", label: "Payroll" },
  { href: "/services/incorporation", label: "Incorporation" },
  { href: "/services/investment", label: "Investment" },
  { href: "/services/budgeting", label: "Budgeting" },
];

export default function ServicesPage() {
  return (
    <ComingSoonRoute
      title="Services"
      description="Detailed service information is coming soon. Visit each service page below."
    >
      <div className="d-flex flex-wrap justify-content-center gap-10px">
        {servicePages.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="btn btn-small btn-rounded btn-white btn-box-shadow"
          >
            {service.label}
          </Link>
        ))}
      </div>
    </ComingSoonRoute>
  );
}
