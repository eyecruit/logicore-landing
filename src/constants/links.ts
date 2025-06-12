import { BarChart2, CreditCard, FileText, LayoutDashboard, MessageSquare, Settings, Users, BarChart, PieChart } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: any;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/dashboard/campaigns",
        label: "Campaigns",
        icon: BarChart
    },
    {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: BarChart2
    },
    {
        href: "/dashboard/posts",
        label: "Posts",
        icon: MessageSquare
    },
    {
        href: "/dashboard/engagement",
        label: "Engagement",
        icon: Users
    },
    {
        href: "/dashboard/billing",
        label: "Billing",
        icon: CreditCard
    },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: Settings
    },
];

export const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/" },
            { name: "Features", href: "/" },
            { name: "Pricing", href: "/" },
            { name: "Contact", href: "/" },
            { name: "Download", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Help Center", href: "/help-center" },
            { name: "Community", href: "/community" },
            { name: "Guides", href: "/guides" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    },
    {
        title: "Developers",
        links: [
            { name: "API Docs", href: "/api-docs" },
            { name: "SDKs", href: "/sdks" },
            { name: "Tools", href: "/tools" },
            { name: "Open Source", href: "/open-source" },
            { name: "Changelog", href: "/changelog" },
        ],
    },
];
