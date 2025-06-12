type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "basic",
        title: "Basic",
        desc: "Get started with essential tools for business management",
        monthlyPrice: 29,
        yearlyPrice: 349,
        buttonText: "Get Started",
        features: [
            "Task management",
            "Basic project tracking",
            "Customer database",
            "5 user limit",
            "Standard reporting",
            "Email support"
        ],
        link: "https://stripe.com/basic-plan-link"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Advanced features for growing businesses",
        monthlyPrice: 39,
        yearlyPrice: 449,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Advanced task management",
            "Full project management suite",
            "Contract management",
            "20 user limit",
            "Enhanced analytics & reporting",
            "Priority support",
            "Team collaboration tools",
            "Custom workflow options"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Tailored solutions for large organizations",
        monthlyPrice: 49,
        yearlyPrice: 549,
        badge: "Best Value",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Unlimited task & project management",
            "Advanced contract management",
            "Dedicated account manager",
            "Unlimited users",
            "Custom analytics & reporting",
            "Enterprise-grade security",
            "API access",
            "24/7 priority support"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
