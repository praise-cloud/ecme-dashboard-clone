const mentuItmes = [
  {
    title: "DASHBOARD",
    items: [
      {
        label: "Ecommerce",
        icon: "home",
        href: "/dashboards/ecommerce",
      },
      {
        label: "Project",
        icon: "home",
        href: "/dashboards/project",
      },
      {
        label: "Marketing",
        icon: "home",
        href: "/dashboards/marketing",
      },
      {
        label: "Analytics",
        icon: "home",
        href: "/dashboards/analytics",
      },
    ],
  },
  {
    title:"CONCEPTS",
    items: [
      {
        label: "AI",
        icon: "home",
        dropItems: [
          {
            name: "Chat",
            href: "/concepts/ai/chat"
          },
          {
            name: "Image",
            href: "/concepts/ai/image"
          },
        ],
      },
      {
        label: "Projects",
        icon: "home",
        dropItems: [
          {
            name: "Scrum Board",
            href: "/concepts/projects/scrum-board"
          },
          {
            name: "List",
            href: "/concepts/projects/list"
          },
          {
            name: "Details",
            href: "/concepts/projects/details"
          },
          {
            name: "Tasks",
            href: "/concepts/projects/tasks"
          },
          {
            name: "Issue",
            href: "/concepts/projects/issue"
          },
        ],
      },
      {
        label: "Customer",
        icon: "home",
        dropItems: [
          {
            name: "List",
            href: "/concepts/customer/list"
          },
          {
            name: "Edit",
            href: "/concepts/customer/edit"
          },
          {
            name: "Create",
            href: "/concepts/customer/create"
          },
          {
            name: "Details",
            href: "/concepts/customer/details"
          },
        ],
      },
      {
        label: "Products",
        icon: "home",
        dropItems: [
          {
            name: "List",
            href: "/concepts/products/list"
          },
          {
            name: "Edit",
            href: "/concepts/products/edit"
          },
          {
            name: "Create",
            href: "/concepts/products/create"
          },
        ],
      },
      {
        label: "Orders",
        icon: "home",
        dropItems: [
          {
            name: "List",
            href: "/concepts/orders/list"
          },
          {
            name: "Edit",
            href: "/concepts/orders/edit"
          },
          {
            name: "Create",
            href: "/concepts/orders/create"
          },
          {
            name: "Details",
            href: "/concepts/orders/details"
          }
        ],
      },
      {
        label: "Account",
        icon: "home",
        dropItems: [
          {
            name: "Settings",
            href: "/concepts/account/settiungs",
          },
          {
            name: "Activity Log",
            href: "/concepts/account/activity-log",
          },
          {
            name: "Roles & Permission",
            href: "/concepts/account/roles-permission",
          },
          {
            name: "Pricing",
            href: "/concepts/account/pricing",
          },
        ],
      },
      {
        label: "Help Center",
        icon: "Home",
        dropItems: [
          {
            name: "Support Hub",
            href: "/concepts/help-center/support-hub",
          },
          {
            name: "Article",
            href: "/concepts/help-center/article",
          },
          {
            name: "Edit Article",
            href: "/concepts/help-center/edit-article",
          },
          {
            name: "Manage Article",
            href: "/concepts/help-center/manage-article",
          },
        ],
      },
      {
        label: "Calendar",
        icon: "Home",
        href: "/concepts/calendar",
      },
      {
        label: "File Manager",
        icon: "Home",
        href: "/concepts/file-manager",
      },
      {
        label: "Mail",
        icon: "Home",
        href: "/concepts/mail",
      },
      {
        label: "Chat",
        icon: "Home",
        href: "/concepts/chat",
      }
    ]
  }
]

const Menu = () => {
  return (
    <div>Menu</div>
  )
}

export default Menu