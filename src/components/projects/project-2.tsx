import { cn } from "../../lib/utils";

import dashboard_p1 from "@/assets/images/p2/dashboard_p1.png";
import dashboard_p2 from "@/assets/images/p2/dashboard_p2.png";


import CarouselLayout from "../shared/carousel-layout";
import { Separator } from "../ui/separator";

const Project2 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8 p-4 text-gray-800", className)}>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          This end-to-end LEGO Analytics Project leverages a Maven Analytics dataset from 1970 to
          2022. Using SQL, Excel, Tableau Public, and PowerPoint, I simulated a full-cycle analytics
          workflow — from data cleaning to executive storytelling.
        </p>

        <h3 className="text-xl font-semibold">🗂️ Project Scope</h3>
        <ul className="text-muted-foreground pl-4">
          <li>
            <span className="font-semibold text-gray-700">Dataset:</span> Maven Analytics LEGO sets (1970–2022)
          </li>
          <li>
            <span className="font-semibold text-gray-700">Tools Used:</span> SQL, Excel, Tableau Public, PowerPoint
          </li>
        </ul>

        <h3 className="text-xl font-semibold">🔎 Business Questions</h3>
        <ul className="text-muted-foreground pl-4">
          <li>How have set release volume and complexity evolved?</li>
          <li>How has average pieces per set changed over time?</li>
          <li>Is there a correlation between price and piece count?</li>
          <li>Which themes were most popular by decade?</li>
          <li>Do licensed sets include more minifigures?</li>
          <li>Which sets are the most expensive and the cheapest?</li>
          <li>How have average LEGO prices trended over time?</li>
        </ul>

        <h3 className="text-xl font-semibold">💡 Key Insights</h3>
        <ul className="text-muted-foreground pl-4">
          <li>Release volume nearly doubled in the last 20 years, reflecting robust growth.</li>
          <li>Strong positive correlation between price and piece count confirms value alignment.</li>
          <li>Licensed themes (e.g., Star Wars, Marvel) feature more minifigures and higher average prices.</li>
          <li>2003 saw a notable price dip tied to LEGO’s corporate restructuring.</li>
          <li>Early decades dominated by the Gear theme; Star Wars and Marvel emerged in later years.</li>
          <li>Price per piece has generally decreased, indicating strategic pricing adjustments or value improvements.</li>
        </ul>

        <h3 className="text-xl font-semibold">🎓 What I Did</h3>
        <ul className="text-muted-foreground pl-4">
          <li>Crafted SQL pipelines to clean, format, and transform raw data; handled outliers and data types.</li>
          <li>Used Excel for initial charting and visual validation of SQL outputs.</li>
          <li>Built dynamic Tableau Public dashboards with filters, tooltips, and parameters.</li>
          <li>Developed custom calculated fields: price-per-piece, minifig density, licensed categorization.</li>
          <li>Designed a polished PowerPoint to guide stakeholders through insights and recommendations.</li>
        </ul>

        <h3 className="text-xl font-semibold">🛠️ Skills Applied</h3>
        <ul className="text-muted-foreground pl-4">
          <li>Advanced SQL querying and data wrangling</li>
          <li>Exploratory analysis and charting in Excel</li>
          <li>Interactive dashboard design in Tableau Public</li>
          <li>Executive storytelling and slide design in PowerPoint</li>
          <li>KPI definition and stakeholder alignment</li>
        </ul>
      </div>

      <Separator className="mb-6 w-[90%] mx-auto" orientation="horizontal" />

      <CarouselLayout
        slidesArray={[dashboard_p1, dashboard_p2]}
        title="LEGO Analytics Dashboard"
        toLink="https://public.tableau.com/app/profile/your.profile/viz/LEGOAnalyticsDashboard/Overview?publish=yes"
      />
    </div>
  );
};

export default Project2;
