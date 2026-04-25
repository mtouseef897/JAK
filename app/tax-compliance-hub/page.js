import ComingSoonRoute from "@/modules/components/common/ComingSoonRoute";

const regions = [
  { id: "pk", label: "Pakistan" },
  { id: "us", label: "US" },
  { id: "uk", label: "UK" },
  { id: "uae", label: "UAE" },
];

export default function TaxComplianceHubPage() {
  return (
    <section className="top-space-margin py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-8 text-center">
            <h2 className="fw-700 text-dark-gray ls-minus-1px mb-10px">
              Tax & Compliance Hub
            </h2>
            <p>
              Explore region-wise tax and compliance sections. Detailed guidance
              is currently being prepared.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-9">
            <ul
              className="nav nav-tabs justify-content-center border-0 mb-4"
              role="tablist"
            >
              {regions.map((region, index) => (
                <li key={region.id} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`${region.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${region.id}-pane`}
                    type="button"
                    role="tab"
                    aria-controls={`${region.id}-pane`}
                    aria-selected={index === 0}
                  >
                    {region.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-content border border-color-extra-medium-gray border-radius-6px p-20px p-md-30px">
              {regions.map((region, index) => (
                <div
                  key={region.id}
                  className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                  id={`${region.id}-pane`}
                  role="tabpanel"
                  aria-labelledby={`${region.id}-tab`}
                >
                  <ComingSoonRoute
                    title={`${region.label} Tax & Compliance`}
                    description={`The ${region.label} tax and compliance content is coming soon.`}
                    compact
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
