import {
  LuArrowRight,
  LuCalendarDays,
  LuMail,
  LuMailbox,
  LuPlaneTakeoff,
  LuShieldQuestion,
  LuUserPlus,
} from "react-icons/lu";
import Link from "next/link";

export default function HelpCenterPage() {
  return (
    <main className={`py-16`}>
      <h1 className={`mx-auto text-2xl font-bold text-center`}>Help Center</h1>
      <h2 className={`mx-auto my-2 text-sm w-60 text-center text-neutral-500`}>
        Find out how we can help you make the most of Book It MATE
      </h2>
      <section
        className={`mt-14 mb-6 mx-auto grid grid-cols-3 gap-10 w-full max-w-3xl`}
      >
        {HELP_PAGES.map(
          ({ id, path, title, description, callToAction, icon }, index) => (
            <article
              className={`group px-4 py-6 flex flex-col items-center gap-6 rounded-xl hover:bg-primary-500 text-primary-500 transition-all duration-300`}
            >
              <div
                className={`w-9 h-9 grid place-content-center bg-neutral-200 dark:bg-neutral-600 group-hover:bg-neutral-50 rounded-full transition-all duration-300`}
              >
                {icon}
              </div>
              <h3
                className={`text-sm font-bold dark:text-neutral-200 group-hover:text-neutral-100 transition-all duration-300`}
              >
                {title}
              </h3>
              <p
                className={`grow w-44 text-xs text-neutral-500 group-hover:text-neutral-400 text-center font-light transition-all duration-300`}
              >
                {description}
              </p>
              <Link
                href={`/help-center${path}`}
                className={`mt-4 px-2 py-1 flex items-center gap-1 hover:bg-secondary-500 rounded-full text-xs font-medium dark:text-neutral-200 group-hover:text-secondary-500 group-hover:hover:text-primary-500 transition-all duration-300`}
              >
                {callToAction ? callToAction : "Learn More"} <LuArrowRight />
              </Link>
            </article>
          ),
        )}
      </section>
    </main>
  );
}

const HELP_PAGES = [
  {
    id: "help-1",
    path: "/getting-started",
    title: "Getting Started",
    description: "Learn how to create an account and start booking",
    icon: <LuPlaneTakeoff size={`20`} />,
  },
  {
    id: "help-2",
    path: "/account-help",
    title: "Account Help",
    description: "Troubleshoot common issues related to your account",
    icon: <LuUserPlus size={`20`} />,
  },
  {
    id: "help-3",
    path: "/faq",
    title: "FAQ",
    description: "Find answers to commonly asked questions",
    icon: <LuShieldQuestion size={`20`} />,
  },
  {
    id: "help-4",
    path: "/bookings-help",
    title: "Bookings Help",
    description: "Browse through answers to possible booking issues",
    icon: <LuCalendarDays size={`20`} />,
  },
  {
    id: "help-5",
    path: "/disputes",
    title: "Disputes",
    description: "Cancel a booking or open a dispute regarding one",
    callToAction: "Learn How",
    icon: <LuMailbox size={`20`} />,
  },
  {
    id: "help-6",
    path: "/contact",
    title: "Contact Us",
    description: "If nothing else answers your question, get in touch",
    callToAction: "Email Us",
    icon: <LuMail size={`20`} />,
  },
];
