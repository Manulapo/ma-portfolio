import { cn } from "../../lib/utils";

import dashboard1 from "@/assets/images/p1/dashboard_p1.png";
import dashboard2 from "@/assets/images/p1/dashboard_p2.png";
import dashboard3 from "@/assets/images/p1/dashboard_p3.png";

import CarouselLayout from "../shared/carousel-layout";
import { Separator } from "../ui/separator";

const Project1 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8 p-4 text-gray-800", className)}>
      <div className="gap-6 items-center">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            When I tackled this advanced Tableau tutorial, I chose not merely to
            replicate the exercises but to craft a truly personalized dashboard
            one I could turn to every day to extract the answers I needed about
            sales and customers.
          </p>
          <h3 className="text-xl font-semibold">🗂️ Project Scope</h3>
          <p>
            <ul className="text-muted-foreground pl-4">
              <li>
                <span className="font-semibold text-gray-700">
                  Sales Dashboard:{" "}
                </span>
                Weekly and monthly trend analysis; profit, sales, and quantity
                sold year-over-year (2020–2023); deep dive into product
                categories and subcategories.{" "}
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Customer Dashboard:
                </span>{" "}
                Distribution of customers by order count and total sales;
                spotlighting the revenue potential of each segment.
              </li>
            </ul>
          </p>

          <h3 className="text-xl font-semibold">💡 Main Insights</h3>
          <p>
            <ul className="text-muted-foreground pl-4">
              <li>
                <span className="font-semibold text-gray-700">
                  Year-End Peaks:{" "}
                </span>
                Consistent sales spikes at year’s end reveal optimal timing for
                promotions.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Top Performers:{" "}
                </span>
                The Technology category especially Phones and Copiers delivers
                the greatest profitability.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Growth Trend:{" "}
                </span>
                A 20.4% increase in sales year-over-year underscores strong
                momentum.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Customer Behavior:{" "}
                </span>
                Although new customers surged late in 2023, most placed only one
                or two orders, highlighting retention opportunities.
              </li>
            </ul>
          </p>

          <h3 className="text-xl font-semibold">🎓 What I Learned</h3>
          <p>
            <ul className="text-muted-foreground pl-4">
              <li>
                Designing advanced Tableau dashboards using layouts, actions,
                and dynamic KPIs.
              </li>
              <li>
                Building a data narrative that goes beyond numbers to drive
                insights.
              </li>
              <li>
                Tailoring the user experience so that every element serves a
                clear decision-making purpose.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Separator className="mb-6 w-[90%] mx-auto" orientation="horizontal" />
      <CarouselLayout
        slidesArray={[dashboard2, dashboard1, dashboard3]}
        title="Dashboard"
        toLink="
          https://public.tableau.com/app/profile/chiara.coletta/viz/Salesdasboard_17457497302050/CustomersDashboard?publish=yes"
      />

      <p className="text-muted-foreground my-3">
        Dahboard design was inspired by Baraa Khatib Salkini's work
      </p>
    </div>
  );
};

export default Project1;
