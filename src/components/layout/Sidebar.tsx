"use client";

import { sidebarMenuItems } from "@/constants/menu";
import SidebarButton from "./SidebarButton";
import SidebarProject from "./SidebarProject";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("/boards");

  return (
    <div className="w-[300px] bg-white border-r px-2 py-4 space-y-4">
      <SidebarProject />
      <div className="space-y-6">
        {sidebarMenuItems.map((menu, index) => (
          <div key={index} className="last:border-t">
            <h2 className="ml-4 mb-2 uppercase font-semibold text-sm text-neutral-dark">{menu.category}</h2>
            {menu.items.map((item, index) => (
              <SidebarButton
                key={index}
                icon={item.icon}
                href={item.href}
                title={item.title}
                active={activeTab === item.href}
                onClick={() => setActiveTab(item.href)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
