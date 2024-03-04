import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Book It Mate",
  description:
    "Our privacy policy defines how Book It Mate uses best practices to keep your data and visit private and secure.",
};

export default function CookiesPolicyPage() {
  return (
    <main className={`container py-20`}>
      <h1 className={`mb-4 text-2xl md:text-3xl font-semibold`}>
        Cookie Policy
      </h1>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We use cookies to help improve your experience of our website at{" "}
        <Link
          href="/"
          className={`font-light text-secondary-700 hover:underline transition-all duration-300`}
        >
          https://bookitmate.com.au
        </Link>
        . This cookie policy is part of Book It MATE&#39;s privacy policy. It
        covers the use of cookies between your device and our site.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We also provide basic information on third-party services we may use,
        who may also use cookies as part of their service. This policy does not
        cover their cookies.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        If you don’t wish to accept cookies from us, you should instruct your
        browser to refuse cookies from{" "}
        <Link
          href="/"
          className={`font-light text-secondary-700 hover:underline transition-all duration-300`}
        >
          https://bookitmate.com.au
        </Link>
        . In such a case, we may be unable to provide you with some of your
        desired content and services.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        What is a cookie?
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        A cookie is a small piece of data that a website stores on your device
        when you visit. It typically contains information about the website
        itself, a unique identifier that allows the site to recognise your web
        browser when you return, additional data that serves the cookie’s
        purpose, and the lifespan of the cookie itself.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Cookies are used to enable certain features (eg logging in), track site
        usage (eg analytics), store your user settings (eg time zone,
        notification preferences), and to personalise your content (eg
        advertising, language).{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Cookies set by the website you are visiting are usually referred to as
        first-party cookies. They typically only track your activity on that
        particular site.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Cookies set by other sites and companies (i.e. third parties) are called
        third-party cookies They can be used to track you on other websites that
        use the same third-party service.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Types of cookies and how we use them
      </h3>
      <h4 className="block mt-6 mb-2 font-semibold text-base text-neutral-900 dark:text-neutral-400 uppercase">
        Essential cookies
      </h4>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Essential cookies are crucial to your experience of a website, enabling
        core features like user logins, account management, shopping carts, and
        payment processing.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We use essential cookies to enable certain functions on our website.{" "}
      </p>
      <h4 className="block mt-6 mb-2 font-semibold text-base text-neutral-900 dark:text-neutral-400 uppercase">
        Performance cookies
      </h4>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Performance cookies track how you use a website during your visit.
        Typically, this information is anonymous and aggregated, with
        information tracked across all site users. They help companies
        understand visitor usage patterns, identify and diagnose problems or
        errors their users may encounter, and make better strategic decisions in
        improving their audience’s overall website experience. These cookies may
        be set by the website you’re visiting (first-party) or by third-party
        services. They do not collect personal information about you.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We use performance cookies on our site.{" "}
      </p>
      <h4 className="block mt-6 mb-2 font-semibold text-base text-neutral-900 dark:text-neutral-400 uppercase">
        Functionality cookies
      </h4>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Functionality cookies are used to collect information about your device
        and any settings you may configure on the website you’re visiting (like
        language and time zone settings). With this information, websites can
        provide you with customised, enhanced, or optimised content and
        services. These cookies may be set by the website you’re visiting
        (first-party) or by third-party services.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We use functionality cookies for selected features on our site.{" "}
      </p>
      <h4 className="block mt-6 mb-2 font-semibold text-base text-neutral-900 dark:text-neutral-400 uppercase">
        Targeting/advertising cookies
      </h4>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Targeting/advertising cookies help determine what promotional content is
        most relevant and appropriate to you and your interests. Websites may
        use them to deliver targeted advertising or limit the number of times
        you see an advertisement. This helps companies improve the effectiveness
        of their campaigns and the quality of content presented to you. These
        cookies may be set by the website you’re visiting (first-party) or by
        third-party services. Targeting/advertising cookies set by third-parties
        may be used to track you on other websites that use the same third-party
        service.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We use targeting/advertising cookies on our site.{" "}
      </p>
    </main>
  );
}
