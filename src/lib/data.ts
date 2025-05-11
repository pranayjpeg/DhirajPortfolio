import md1 from "../assets/tg.png";
import ap1 from "../assets/eq.png";
import ispta from "../assets/ispta.png";
import rr from "../assets/rr.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string[];
  liveUrl?: string;
  liveUrlG?: string;
  liveUrlA?: string;
  githubUrl?: string;
  type?: string;
};

export const projects: any[] = [
  {
    id: 1,
    title: "Tivoli Group",
    description:
      [
        "Independently managed reconciliation of all financial accounts.",
        "Prepared accurate and timely financial and management reports in line with company standards.",
        "Conducted monthly and quarterly account reconciliations for accurate ledger maintenance.",
        "Developed and updated annual budgets and latest financial forecasts.",
        "Analyzed financial statements for variances and flagged issues to the CFO.",
        "Led month-end close procedures and consolidation processes, ensuring timely internal and external reporting.",
        "Reviewed inter-company transactions, generated invoices, and reconciled all balance sheet control accounts (A/P, A/R, etc.).",
        "Coordinated statutory and internal audit schedules and requirements.",
        "Liaised with banks for loans, credit facilities, and other financial arrangements.",
        "Documented and optimized accounting policies and internal controls to strengthen process integrity.",
        "Collaborated with cross-functional teams and the CFO to enhance financial procedures and systems.",
        "Managed accounts payable functions for construction-related expenses and vendor payments.",
        "Oversaw vendor account management and cheque generation on a weekly or on-demand basis.",
        "Directed financial operations, including budgeting, payables, and receivables.",
        "Created detailed budgets and forecasts for strategic decision-making.",
        "Ensured timely compliance with all accounting deadlines.",
        "Monitored, recorded, and reported company-wide operational and project-specific expenses.",
        "Handled general administrative tasks and office coordination.",
        "Managed project billing cycles and receivables, ensuring smooth financial operations."
      ], tags: [
        "React Native",
        "Javascript",
        "Redux",
        "Google Maps",
        "FireBase",
        "OneSignal",
        "Geolocation ",
      ],
    imageUrl: [
      md1,

    ],
    type: "app",
    liveUrlG:
      "https://play.google.com/store/apps/details?id=com.mdht&hl=en_IN",
    liveUrlA: "https://apps.apple.com/in/app/mdhealthtrak/id6743380687",
    loc: "Doha Qatar",
  },
  {
    id: 2,
    title: "Electra Qatar W.L.L.",
    description:
      ["Reviewed invoice reconciliations and posted all billing entries into the automated accounting system.",
        "Reconciled and recorded all revenue collections and indirect revenues accurately into the accounting system.",
        "Managed the review and posting of withdrawals and subsequent issuance of credit notes.",
        "Investigated and reconciled returned payments and dishonored cheques with timely follow-ups.",
        "Monitored accounts receivable aging, revenue budgets, and reporting accuracy.",
        "Compiled and analyzed general ledger accounts related to revenue, identifying and reporting discrepancies.",
        "Evaluated historical financial data including invoices, bank transactions, and receipts to identify trends and prepare analytical reports.",
        "Reconciled and recorded all financial distributions and transfers in the system.",
        "Reviewed and oversaw all payroll transactions for monthly, hourly, and temporary staff.",
        "Conducted petty cash audits, reconciliations, and postings to maintain accuracy.",
        "Supervised activity transactions, reconciliations, year-end balance confirmations, and unannounced cash counts.",
        "Maintained relationships with banks and financial institutions for facility renewals and service agreements.",
        "Ensured accurate accounting for all receipts and disbursements, maintaining financial integrity.",
        "Implemented ongoing process monitoring to improve efficiency in cash handling, payroll, and disbursement procedures.",
        "Prepared year-end audit documentation and met all external audit requirements on time.",
        "Verified that LPOs were approved correctly with accurate stock entries from the storekeeper.",
        "Ensured proper job cost tracking, timely updates, and cost accuracy throughout each project.",
        "Completed final job costing including materials, labor, and overheads immediately upon project completion, and reported it to management.",
        "Recorded debtor entries daily and generated job orders as per approved client quotations.",
        "Processed monthly statutory payments (e.g., utilities, rent) before deadlines to avoid penalties.",
        "Handled leave settlements in compliance with company guidelines for departing or vacationing employees.",
        "Prepared monthly staff payroll according to company policies and ensured timely disbursement.",
        "Generated monthly MIS reports on company profitability by the 4th of each month with reconciled bank balances.",
        "Coordinated year-end audits and ensured all balance sheet items were verified monthly, avoiding last-minute pressure.",
        "Conducted quarterly physical inventory checks of fixed assets and stock items as per the fixed asset schedule."
      ]
    , tags: ["React Native", "Typescript", "Redux", "FireBase", "Video Player"],
    imageUrl: [ap1],
    liveUrlG:
      "https://play.google.com/store/apps/details?id=com.liveayurprana.prod&hl=en_IN",
    liveUrlA: "https://apps.apple.com/in/app/ayurprana/id6469480400",
    loc: "Doha Qatar",
    type: "app",
  },
  {
    id: 3,
    title: "Shraddha Ispat",
    description:
      [
        "Monitored and controlled company costs, ensuring effective management of daily accounting and finance operations under high-pressure environments.",
        "Applied sound understanding of accounting principles, standards, and company financial policies.",
        "Worked within an ERP system environment; proficient in Tally ERP 9.",
        "Independently managed month-end closing and prepared Profit & Loss statements and Balance Sheets.",

        // Treasury
        "Maintained daily cash flow and conducted accurate cash reconciliation.",
        "Entered cash voucher transactions into the accounting system efficiently.",
        "Handled cheque payments and receipts, ensuring proper bank data entries.",
        "Conducted weekly bank reconciliations to ensure up-to-date financial records.",

        // General Ledger
        "Maintained comprehensive records of customers, vendors, and service providers with accurate debit and credit balances.",
        "Recorded all sales and purchase invoices in the accounting system.",
        "Performed weekly reconciliation (knocking off) of outstanding balances in general ledger accounts.",
        "Prepared age-wise analysis reports for debtors and creditors for better financial tracking.",

        // Audit Related
        "Maintained and organized all import documentation including invoices, packing lists, certificates of origin, and bills of lading.",
        "Systematically filed Sales, Purchases, Expenses, TDS, VAT, and Capital Expenses for audit compliance.",
        "Managed Fixed Assets Register in compliance with the Companies Act and Accounting Standards.",
        "Ensured accurate record-keeping for statutory and tax audit requirements.",

        // Inventory Control
        "Monitored inventory expenses and performed valuation analysis regularly.",
        "Generated Goods Receipt Notes (GRNs) and ensured timely ERP system updates.",
        "Coordinated with the production team for issuance of raw materials and tracked consumption.",
        "Supervised the Production Division’s financial records and maintained all required statutory registers.",
        "Implemented accurate product costing methodologies for efficient financial planning.",
        "Conducted physical inventory checks for raw materials and finished goods, ensuring compliance with excise record requirements."
      ],
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    imageUrl: [ispta],
    liveUrl: "https://www.mdhealthtrak.com/",
    loc: "Goa India",
    type: "site",
  },
  {
    id: 4,
    title: "RR Steel",
    description:
      [
        "Filed VAT, Excise, Service Tax, and TDS returns accurately and on time.",
        "Oversaw production planning and generated daily production reports to ensure operational efficiency.",
        "Created tax invoices and quotations for clients, ensuring compliance with tax laws.",
        "Managed dealer orders and maintained ISO documentation for audits and quality assurance.",
        "Finalized Profit & Loss statements and Balance Sheets; managed purchase bills and payables.",
        "Performed bank reconciliations to align internal records with bank statements.",
        "Handled inventory and stock management to ensure optimal material availability.",
        "Collected C-Forms from dealers by preparing and submitting quarterly statements.",
        "Prepared delivery orders and followed up on pending payments with customers.",
        "Reviewed and corrected discrepancies in sales and purchase invoices.",
        "Handled corrections and entries for all voucher types including Journal, Payment, Receipt, Contra, Purchase, and Sales."
      ],
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    imageUrl: [rr],
    liveUrl: "https://liveayurprana.com/",
    loc: "Goa India",
    type: "site",
  },
  // {
  //   id: 5,
  //   title: "Sunlight Interior & Exhibitions",
  //   description:
  //     [
  //       "Worked with accounts payables and receivables for the sister company of ELECTAR QATAR WLL.",
  //       "Handled daily transactions, ensured accuracy in account reconciliations.",
  //       "Processed and reviewed invoices for payment, ensuring timely execution.",
  //       "Managed outstanding receivables and followed up with clients to ensure payments were collected on time.",
  //       "Provided support in financial record-keeping and monthly reporting tasks during the short-term role."
  //     ],
  //   tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  //   imageUrl: [ispta],
  //   liveUrl: "https://liveayurprana.com/",
  //   loc: "Bahrain",
  //   type: "site",
  // },
];

import react from "../assets/sap.png";
import CSS3 from "../assets/tally.png";
import HTML5 from "../assets/d2.png";
import JavaScript from "../assets/office.png";
import TypeScript from "../assets/ms.png";
import Git from "../assets/outlook.png";
import science from "../assets/tax.png";

type Skill = {
  name: string;
  icon: string; // <-- Correct type for Lucide Icons
};

export const skills: Skill[] = [
  { name: "SAP", icon: react },
  { name: "Taxation", icon: science },
  { name: "MS Dyanamics", icon: HTML5 },
  { name: "Tally", icon: CSS3 },
  { name: "MS OFFICE", icon: JavaScript },
  { name: "MS 365", icon: TypeScript },
  { name: "Outlook", icon: Git },
];
