export interface NavItem {
  title: string
  href: string
  isNew?: boolean
}

export interface NavSection {
  title: string
  items: NavItem[]
}

// Navigation pour la section Documentation uniquement
export const docsNavigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Dark Mode", href: "/docs/dark-mode" },
      { title: "Internationalisation", href: "/docs/i18n" },
      { title: "TypeScript", href: "/docs/typescript" },
      { title: "CLI", href: "/docs/cli", isNew: true },
      { title: "Accessibilité", href: "/docs/accessibility" },
      { title: "Figma", href: "/docs/figma", isNew: true },
      { title: "Changelog", href: "/docs/changelog" },
    ],
  },
]

// Navigation complète (inclut composants et blocks)
export const navigation: NavSection[] = [
  ...docsNavigation,
  {
    title: "Forms",
    items: [
      { title: "Button", href: "/components/button" },
      { title: "Input", href: "/components/input" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Select", href: "/components/select" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "RadioGroup", href: "/components/radio-group" },
      { title: "Switch", href: "/components/switch" },
      { title: "Slider", href: "/components/slider" },
      { title: "DateTimePicker", href: "/components/datetime-picker", isNew: true },
      { title: "Autocomplete", href: "/components/autocomplete" },
      { title: "ColorPicker", href: "/components/color-picker" },
      { title: "FileUpload", href: "/components/file-upload" },
      { title: "RichTextEditor", href: "/components/rich-text-editor" },
      { title: "Form", href: "/components/form" },
      { title: "Label", href: "/components/label" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Table", href: "/components/table" },
      { title: "DataTable", href: "/components/data-table" },
      { title: "DataTable Advanced", href: "/components/data-table-advanced", isNew: true },
      { title: "Card", href: "/components/card" },
      { title: "Badge", href: "/components/badge" },
      { title: "Avatar", href: "/components/avatar" },
      { title: "Progress", href: "/components/progress" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Calendar", href: "/components/calendar" },
      { title: "Code", href: "/components/code" },
    ],
  },
  {
    title: "Charts",
    items: [
      { title: "Bar Chart", href: "/components/bar-chart" },
      { title: "Line Chart", href: "/components/line-chart" },
      { title: "Area Chart", href: "/components/area-chart" },
      { title: "Pie Chart", href: "/components/pie-chart" },
      { title: "Sparkline", href: "/components/sparkline" },
      { title: "Mini Chart", href: "/components/mini-chart" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", href: "/components/alert" },
      { title: "AlertDialog", href: "/components/alert-dialog" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Toast", href: "/components/toast" },
      { title: "Tooltip", href: "/components/tooltip" },
      { title: "Popover", href: "/components/popover" },
      { title: "HoverCard", href: "/components/hover-card" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Tabs", href: "/components/tabs" },
      { title: "NavigationMenu", href: "/components/navigation-menu" },
      { title: "DropdownMenu", href: "/components/dropdown-menu" },
      { title: "ContextMenu", href: "/components/context-menu" },
      { title: "Menubar", href: "/components/menubar" },
      { title: "Command", href: "/components/command" },
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Carousel", href: "/components/carousel" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Collapsible", href: "/components/collapsible" },
      { title: "ScrollArea", href: "/components/scroll-area" },
      { title: "Sheet", href: "/components/sheet" },
      { title: "Separator", href: "/components/separator" },
      { title: "AspectRatio", href: "/components/aspect-ratio" },
      { title: "Typography", href: "/components/typography" },
    ],
  },
  {
    title: "Utilities",
    items: [
      { title: "ThemeSelector", href: "/components/theme-selector" },
      { title: "LanguageSelector", href: "/components/language-selector" },
      { title: "ThemeManager", href: "/components/theme-manager" },
      { title: "Spinner", href: "/components/spinner" },
      { title: "ErrorBoundary", href: "/components/error-boundary" },
    ],
  },
  {
    title: "Waka Components",
    items: [
      { title: "WakaStepper", href: "/components/stepper" },
      { title: "WakaBreadcrumb", href: "/components/breadcrumb" },
      { title: "WakaAdmincrumb", href: "/components/admincrumb", isNew: true },
      { title: "WakaModal", href: "/components/modal" },
      { title: "WakaDrawer", href: "/components/drawer" },
      { title: "WakaTree", href: "/components/tree" },
      { title: "WakaPagination", href: "/components/pagination" },
      { title: "WakaTimePicker", href: "/components/time-picker" },
      { title: "WakaDateRangePicker", href: "/components/date-range-picker" },
      { title: "WakaCombobox", href: "/components/combobox" },
      { title: "WakaNumberInput", href: "/components/number-input" },
      { title: "WakaImage", href: "/components/image" },
      { title: "WakaVideo", href: "/components/video" },
      { title: "WakaQRCode", href: "/components/qrcode" },
      { title: "WakaBarcode", href: "/components/barcode" },
      { title: "WakaVirtualList", href: "/components/virtual-list" },
      { title: "WakaSegmentedControl", href: "/components/segmented-control" },
      { title: "WakaKanban", href: "/components/kanban" },
      { title: "WakaTimeline", href: "/components/timeline" },
      { title: "WakaStat", href: "/components/stat" },
      { title: "WakaThemeCreator", href: "/components/theme-creator" },
      { title: "WakaCarousel", href: "/components/carousel" },
      { title: "WakaThemeManager", href: "/components/theme-manager" },
    ],
  },
  {
    title: "Blocks - Layout",
    items: [
      { title: "Layout", href: "/blocks/layout" },
      { title: "Sidebar", href: "/blocks/sidebar" },
      { title: "SidebarLayout", href: "/blocks/sidebar-layout" },
      { title: "Header", href: "/blocks/header" },
      { title: "Footer", href: "/blocks/footer" },
      { title: "Headtab", href: "/blocks/headtab" },
    ],
  },
  {
    title: "Blocks - Pages",
    items: [
      { title: "Login", href: "/blocks/login" },
      { title: "Dashboard", href: "/blocks/dashboard" },
      { title: "Settings", href: "/blocks/settings" },
      { title: "Profile", href: "/blocks/profile" },
      { title: "UserManagement", href: "/blocks/user-management" },
      { title: "ErrorPages", href: "/blocks/error-pages" },
      { title: "Landing", href: "/blocks/landing" },
      { title: "Pricing", href: "/blocks/pricing" },
    ],
  },
  {
    title: "Blocks - Features",
    items: [
      { title: "Chat", href: "/blocks/chat" },
      { title: "CalendarView", href: "/blocks/calendar-view" },
      { title: "KanbanBoard", href: "/blocks/kanban-board" },
      { title: "FileManager", href: "/blocks/file-manager" },
      { title: "ActivityTimeline", href: "/blocks/activity-timeline" },
      { title: "Wizard", href: "/blocks/wizard" },
      { title: "FAQ", href: "/blocks/faq" },
      { title: "EmptyStates", href: "/blocks/empty-states" },
      { title: "ThemeCreator", href: "/blocks/theme-creator-block", isNew: true },
      { title: "I18nEditor", href: "/blocks/i18n-editor", isNew: true },
    ],
  },
]
