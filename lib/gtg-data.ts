/**
 * Get to Green — 146-point people-systems readiness dataset.
 *
 * Ported VERBATIM from the prototype workbook (prototype/gtg-data.js):
 * 146 HR check items across 7 macro systems and 30+ micro-systems.
 * Each item carries a status (G/Y/R/U), an owner, and a weight category.
 * Do not trim or edit item copy — this is source-of-truth demo data.
 */

export type GtgStatus = "G" | "Y" | "R" | "U";
export type GtgCategory = "Critical" | "Necessary" | "Important" | "Optional";

export interface GtgItem {
  micro: string;
  item: string;
  status: GtgStatus;
  owner: string;
  category: GtgCategory;
}

export type GtgMacro =
  | "Protect"
  | "Attract"
  | "Hire"
  | "Onboard"
  | "Perform"
  | "Retain"
  | "Grow";

export const MACRO_ORDER: GtgMacro[] = ["Protect","Attract","Hire","Onboard","Perform","Retain","Grow"];

export const GTG_DATA: Record<GtgMacro, GtgItem[]> = {
  "Protect": [
    {
      "micro": "Work Authorization (I-9 & E-Verify) Compliance",
      "item": "All new hires complete Form I-9 within 3 business days of start date",
      "status": "G",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Work Authorization (I-9 & E-Verify) Compliance",
      "item": "I-9 documents reviewed by authorized representative",
      "status": "G",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Work Authorization (I-9 & E-Verify) Compliance",
      "item": "E-Verify run for applicable new hires; TNCs resolved per policy",
      "status": "G",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Work Authorization (I-9 & E-Verify) Compliance",
      "item": "Annual internal I-9 audit completed and corrections documented",
      "status": "G",
      "owner": "Janet Flores",
      "category": "Critical"
    },
    {
      "micro": "Work Authorization (I-9 & E-Verify) Compliance",
      "item": "I-9s retained/purged per federal retention rules",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Employee Handbook & Policy Management",
      "item": "Current employee handbook published and accessible to all employees",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Employee Handbook & Policy Management",
      "item": "Annual legal/policy review completed and version-controlled",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Employee Handbook & Policy Management",
      "item": "Signed acknowledgments on file for all employees",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Employee Handbook & Policy Management",
      "item": "Key standalone policies documented (IT/acceptable use, remote work, discipline)",
      "status": "G",
      "owner": "Janet Flores",
      "category": "Necessary"
    },
    {
      "micro": "Employee Handbook & Policy Management",
      "item": "Policy updates communicated and prior versions archived",
      "status": "G",
      "owner": "Janet Flores",
      "category": "Necessary"
    },
    {
      "micro": "Payroll, Timekeeping & Benefits Administration",
      "item": "Timekeeping system accurately tracks hours (incl. overtime) for non-exempt staff",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Payroll, Timekeeping & Benefits Administration",
      "item": "Payroll processed on-time with gross-to-net audit each cycle",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Payroll, Timekeeping & Benefits Administration",
      "item": "Wage & hour compliance validated (min wage, OT, final pay timing)",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Payroll, Timekeeping & Benefits Administration",
      "item": "Benefits enrollment/eligibility and notices managed and documented",
      "status": "U",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Payroll, Timekeeping & Benefits Administration",
      "item": "PTO/sick accruals and payouts tracked accurately per policy and law",
      "status": "R",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Workplace Safety & Health (OSHA) Program",
      "item": "Required safety trainings assigned and completed",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Workplace Safety & Health (OSHA) Program",
      "item": "OSHA and labor law posters displayed at each worksite",
      "status": "G",
      "owner": "Sharayu Rajesh",
      "category": "Critical"
    },
    {
      "micro": "Workplace Safety & Health (OSHA) Program",
      "item": "Incident/near-miss reporting and investigation process in use",
      "status": "Y",
      "owner": "Operations",
      "category": "Critical"
    },
    {
      "micro": "Workplace Safety & Health (OSHA) Program",
      "item": "OSHA 300/300A logs maintained where applicable",
      "status": "G",
      "owner": "Janet Flores",
      "category": "Critical"
    },
    {
      "micro": "Workplace Safety & Health (OSHA) Program",
      "item": "Workers’ compensation coverage active; claims process documented",
      "status": "U",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Employee Records & Data Management",
      "item": "Complete personnel file for each employee",
      "status": "Y",
      "owner": "Sharayu Rajesh",
      "category": "Necessary"
    },
    {
      "micro": "Employee Records & Data Management",
      "item": "Medical/confidential docs stored separately with restricted access",
      "status": "G",
      "owner": "Janet Flores",
      "category": "Necessary"
    },
    {
      "micro": "Employee Records & Data Management",
      "item": "Document retention schedule in place and followed",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Employee Records & Data Management",
      "item": "HR data backed up; access controlled; privacy safeguards implemented",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Employee Records & Data Management",
      "item": "Change-in-status events documented timely",
      "status": "G",
      "owner": "Sharayu Rajesh",
      "category": "Necessary"
    },
    {
      "micro": "Employee Relations & EEO Compliance",
      "item": "Anti-harassment/EEO policy and complaint procedure communicated",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Employee Relations & EEO Compliance",
      "item": "Multiple reporting channels (HR, manager, anonymous) available",
      "status": "G",
      "owner": "Janet Flores",
      "category": "Critical"
    },
    {
      "micro": "Employee Relations & EEO Compliance",
      "item": "Investigations conducted promptly and documented end-to-end",
      "status": "G",
      "owner": "Janet Flores",
      "category": "Critical"
    },
    {
      "micro": "Employee Relations & EEO Compliance",
      "item": "Accommodation process documented (ADA/religious)",
      "status": "U",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Employee Relations & EEO Compliance",
      "item": "No-retaliation policy enforced; ER case log maintained",
      "status": "R",
      "owner": "Unassigned",
      "category": "Critical"
    },
    {
      "micro": "Offboarding & Termination Process",
      "item": "Standard exit checklist used for all separations",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Offboarding & Termination Process",
      "item": "Final pay delivered on time per state law; PTO payout per policy/law",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Offboarding & Termination Process",
      "item": "COBRA/state continuation notices sent where applicable",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Offboarding & Termination Process",
      "item": "Company assets retrieved; access revoked on exit",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Offboarding & Termination Process",
      "item": "Exit documentation completed",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    }
  ],
  "Attract": [
    {
      "micro": "Employer Branding & Talent Marketing",
      "item": "Careers page current with culture/benefits and open roles",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employer Branding & Talent Marketing",
      "item": "Consistent employer brand on social channels",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employer Branding & Talent Marketing",
      "item": "Employee reviews monitored and engaged",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employer Branding & Talent Marketing",
      "item": "Recruitment marketing assets available",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Job Description & Role Definition",
      "item": "Standard JD template used for all roles",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Job Description & Role Definition",
      "item": "Essential functions, qualifications, and EEO statement included",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Job Description & Role Definition",
      "item": "JDs reviewed and updated at least annually",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Job Description & Role Definition",
      "item": "JDs align with postings and offers",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Multi-Channel Sourcing Process",
      "item": "Defined sourcing mix (job boards, social, agencies, campus)",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Multi-Channel Sourcing Process",
      "item": "Budget and ROI tracked by channel",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Multi-Channel Sourcing Process",
      "item": "Hard-to-fill role strategy documented",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Multi-Channel Sourcing Process",
      "item": "SOPs documented for consistency",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employee Referral Program",
      "item": "Written referral policy with rewards and eligibility rules",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employee Referral Program",
      "item": "Simple referral submission method",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employee Referral Program",
      "item": "Referrals tracked; timely payouts made",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employee Referral Program",
      "item": "Program communicated quarterly",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Candidate Relationship Management (Talent Pool)",
      "item": "Talent pool/CRM maintained for silver medalists and leads",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Candidate Relationship Management (Talent Pool)",
      "item": "Periodic outreach to talent pool",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Candidate Relationship Management (Talent Pool)",
      "item": "Consent/privacy for data retention managed",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Candidate Relationship Management (Talent Pool)",
      "item": "Conversion/engagement metrics tracked",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    }
  ],
  "Hire": [
    {
      "micro": "Requisition & Hiring Approval Workflow",
      "item": "Requisition includes role, justification, and compensation range",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Requisition & Hiring Approval Workflow",
      "item": "Approval routing defined (dept, HR, finance)",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Requisition & Hiring Approval Workflow",
      "item": "Req ID tracked; no posting without approval",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Requisition & Hiring Approval Workflow",
      "item": "Headcount plan reconciled to requisitions",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Applicant Tracking & Pipeline Management",
      "item": "All applicants logged with stage and disposition",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Applicant Tracking & Pipeline Management",
      "item": "Interview notes/scorecards retained",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Applicant Tracking & Pipeline Management",
      "item": "EEO/DEI data captured and reported appropriately",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Applicant Tracking & Pipeline Management",
      "item": "Pipeline metrics reviewed with hiring managers",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Structured Interview & Selection Process",
      "item": "Interview guides standardized per role",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Structured Interview & Selection Process",
      "item": "Interviewers trained on legal/behavioral interviewing",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Structured Interview & Selection Process",
      "item": "Evaluation forms with criteria and ratings required",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Structured Interview & Selection Process",
      "item": "Selection rationale documented",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Background Checks & Pre-Employment Screening",
      "item": "Screening policy defines checks by role",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Background Checks & Pre-Employment Screening",
      "item": "FCRA-compliant disclosures, consent, and adverse action followed",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Background Checks & Pre-Employment Screening",
      "item": "Education/employment verification performed and logged",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Background Checks & Pre-Employment Screening",
      "item": "No starts before required checks completed or exceptions documented",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Offer Management & Hiring Documentation",
      "item": "Offer letters standardized with at-will statement and terms",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Offer Management & Hiring Documentation",
      "item": "Comp review for internal equity and budget before offer",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Offer Management & Hiring Documentation",
      "item": "Signed offers stored in personnel files",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Offer Management & Hiring Documentation",
      "item": "Contingencies clearly stated and tracked",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    }
  ],
  "Onboard": [
    {
      "micro": "New Hire Documentation & Pre-Boarding",
      "item": "Signed offer letter captured and stored",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "New Hire Documentation & Pre-Boarding",
      "item": "W-4/state tax and direct deposit forms collected before Day 1",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "New Hire Documentation & Pre-Boarding",
      "item": "I-9 verification completed per law",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "New Hire Documentation & Pre-Boarding",
      "item": "IT accounts and equipment prepared pre-start",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "New Hire Documentation & Pre-Boarding",
      "item": "Welcome/first-day info sent to new hire",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "New Hire Orientation & Initial Training",
      "item": "Day 1 orientation covers mission/values, policies, and safety",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "New Hire Orientation & Initial Training",
      "item": "Role-specific SOPs/training scheduled within first week",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "New Hire Orientation & Initial Training",
      "item": "Policy acknowledgments signed during orientation",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "New Hire Orientation & Initial Training",
      "item": "Buddy/mentor assigned for first 30 days",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "New Hire Orientation & Initial Training",
      "item": "Orientation feedback collected",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Onboarding Checklist & 30/60/90-Day Check-ins",
      "item": "Standard onboarding checklist used and owner assigned",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Onboarding Checklist & 30/60/90-Day Check-ins",
      "item": "30/60/90-day check-ins scheduled at hire",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Onboarding Checklist & 30/60/90-Day Check-ins",
      "item": "Check-in notes captured; issues tracked to closure",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Onboarding Checklist & 30/60/90-Day Check-ins",
      "item": "Mandatory trainings completed within timelines",
      "status": "Y",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Onboarding Checklist & 30/60/90-Day Check-ins",
      "item": "90-day readiness assessment completed",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Probationary/Introductory Period Review",
      "item": "Probationary period defined in policy (if used)",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Probationary/Introductory Period Review",
      "item": "Formal review at end of probation with documented outcome",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Probationary/Introductory Period Review",
      "item": "Performance expectations clarified; support/resources provided",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Probationary/Introductory Period Review",
      "item": "Extensions/terminations handled per policy with documentation",
      "status": "U",
      "owner": "Unassigned",
      "category": "Optional"
    }
  ],
  "Perform": [
    {
      "micro": "Goal Setting & Alignment Process",
      "item": "Company/department goals set on cadence",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Goal Setting & Alignment Process",
      "item": "Employee SMART/OKR goals documented and aligned",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Goal Setting & Alignment Process",
      "item": "Mid-cycle goal reviews conducted and recorded",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Goal Setting & Alignment Process",
      "item": "End-of-cycle outcomes evaluated",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Performance Appraisals & Reviews",
      "item": "Formal review cadence defined",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Performance Appraisals & Reviews",
      "item": "Standard review form used for all employees",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Performance Appraisals & Reviews",
      "item": "Calibration across managers performed when ratings used",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Performance Appraisals & Reviews",
      "item": "Review completion tracked to 100%",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Regular Feedback & 1-on-1 Meetings",
      "item": "Managers hold recurring 1:1s with each direct report",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Regular Feedback & 1-on-1 Meetings",
      "item": "1:1 agenda template used",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Regular Feedback & 1-on-1 Meetings",
      "item": "Action items captured and followed up",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Regular Feedback & 1-on-1 Meetings",
      "item": "Compliance sampled via survey or spot audits",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Performance Improvement (PIP) & Discipline",
      "item": "Progressive discipline policy documented and communicated",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Performance Improvement (PIP) & Discipline",
      "item": "PIPs specify targets, support, and timelines",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Performance Improvement (PIP) & Discipline",
      "item": "Monitoring during PIP documented; outcomes recorded",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Performance Improvement (PIP) & Discipline",
      "item": "Terminations reviewed for process adherence",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    }
  ],
  "Retain": [
    {
      "micro": "Employee Engagement Surveys & Feedback",
      "item": "Pulse or annual surveys run with anonymous response",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employee Engagement Surveys & Feedback",
      "item": "Results analyzed; action plans created",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employee Engagement Surveys & Feedback",
      "item": "Company-wide results and actions communicated",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Employee Engagement Surveys & Feedback",
      "item": "Follow-up measurement shows movement",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Turnover Tracking & Analysis",
      "item": "Turnover log maintained with reasons and tenure",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Turnover Tracking & Analysis",
      "item": "Early attrition (<12 months) monitored separately",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Turnover Tracking & Analysis",
      "item": "Trends reviewed with leadership",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Turnover Tracking & Analysis",
      "item": "Corrective actions identified and tracked",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Compensation & Benefits Review Process",
      "item": "Annual market benchmarking performed for key roles",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Compensation & Benefits Review Process",
      "item": "Internal pay equity review conducted and issues addressed",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Compensation & Benefits Review Process",
      "item": "Benefits evaluated annually",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Compensation & Benefits Review Process",
      "item": "Changes implemented and communicated on schedule",
      "status": "U",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Employee Recognition & Rewards Programs",
      "item": "Formal recognition channels defined",
      "status": "R",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Employee Recognition & Rewards Programs",
      "item": "Recognition is timely, specific, and visible",
      "status": "R",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Employee Recognition & Rewards Programs",
      "item": "Budget/process for spot awards in place",
      "status": "R",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Employee Recognition & Rewards Programs",
      "item": "Participation and coverage monitored",
      "status": "R",
      "owner": "Unassigned",
      "category": "Optional"
    },
    {
      "micro": "Exit Interviews & Knowledge Transfer",
      "item": "Exit interviews conducted for voluntary separations",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Exit Interviews & Knowledge Transfer",
      "item": "Themes analyzed and fed into retention actions",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Exit Interviews & Knowledge Transfer",
      "item": "Knowledge transfer checklist completed",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Exit Interviews & Knowledge Transfer",
      "item": "Access/ownership handoffs verified",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    }
  ],
  "Grow": [
    {
      "micro": "Continuous Learning & Development Program",
      "item": "Training calendar maintained",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Continuous Learning & Development Program",
      "item": "LMS or tracker records completions",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Continuous Learning & Development Program",
      "item": "Training effectiveness evaluated",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Continuous Learning & Development Program",
      "item": "Budget allocated for external courses/certifications",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Career Pathing & Promotion Planning",
      "item": "Career ladders defined for job families",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Career Pathing & Promotion Planning",
      "item": "Internal job posting and mobility encouraged",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Career Pathing & Promotion Planning",
      "item": "Promotion criteria/process documented and fair",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Career Pathing & Promotion Planning",
      "item": "Promotion and internal move data monitored for equity",
      "status": "U",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Succession Planning for Key Roles",
      "item": "Key roles identified with potential successors",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Succession Planning for Key Roles",
      "item": "Development plans in place for successors",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Succession Planning for Key Roles",
      "item": "Emergency interim coverage defined",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Succession Planning for Key Roles",
      "item": "Plan reviewed/updated at least annually",
      "status": "R",
      "owner": "Unassigned",
      "category": "Necessary"
    },
    {
      "micro": "Leadership Development & Mentorship Programs",
      "item": "New manager training required within 90 days",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Leadership Development & Mentorship Programs",
      "item": "Leadership workshops/coaching by level",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Leadership Development & Mentorship Programs",
      "item": "Mentorship program active with tracked pairings",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    },
    {
      "micro": "Leadership Development & Mentorship Programs",
      "item": "Program outcomes measured",
      "status": "R",
      "owner": "Unassigned",
      "category": "Important"
    }
  ]
};
