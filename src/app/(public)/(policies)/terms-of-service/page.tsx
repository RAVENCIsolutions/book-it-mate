import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Book It Mate",
  description:
    "Our privacy policy defines how Book It Mate uses best practices to keep your data and visit private and secure.",
};

export default function TermsOfServicePage() {
  return (
    <main className={`container py-20`}>
      <h1 className={`mb-4 text-2xl md:text-3xl font-semibold`}>
        Terms of Service
      </h1>
      <p className={`mb-4 text-sm font-light leading-6`}>
        These Terms of Service govern your use of the website located at{" "}
        <Link
          href="/"
          className={`font-light text-secondary-700 hover:underline transition-all duration-300`}
        >
          https://bookitmate.com.au
        </Link>{" "}
        and any related services provided by Book It MATE.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        By accessing{" "}
        <Link
          href="/"
          className={`font-light text-secondary-700 hover:underline transition-all duration-300`}
        >
          https://bookitmate.com.au
        </Link>
        , you agree to abide by these Terms of Service and to comply with all
        applicable laws and regulations. If you do not agree with these Terms of
        Service, you are prohibited from using or accessing this website or
        using any other services provided by Book It MATE.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We, Book It MATE, reserve the right to review and amend any of these
        Terms of Service at our sole discretion. Upon doing so, we will update
        this page. Any changes to these Terms of Service will take effect
        immediately from the date of publication.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        These Terms of Service were last updated on{" "}
        <span className={`font-bold`}>04 March 2024.</span>{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Limitations of Use
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        By using this website, you warrant on behalf of yourself, your users,
        and other parties you represent that you will not:{" "}
      </p>
      <ol>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          modify, copy, prepare derivative works of, decompile, or reverse
          engineer any materials and software contained on this website;
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          remove any copyright or other proprietary notations from any materials
          and software on this website;
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          transfer the materials to another person or &ldquo;mirror&rdquo; the
          materials on any other server;
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          knowingly or negligently use this website or any of its associated
          services in a way that abuses or disrupts our networks or any other
          service Book It MATE provides;
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          use this website or its associated services to transmit or publish any
          harassing, indecent, obscene, fraudulent, or unlawful material;
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          use this website or its associated services in violation of any
          applicable laws or regulations;
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          use this website in conjunction with sending unauthorised advertising
          or spam;
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          harvest, collect or gather user data without the user’s consent; or
        </li>
        <li
          className={`mb-1 text-sm font-light list-disc list-inside indent-4`}
        >
          use this website or its associated services in such a way that may
          infringe the privacy, intellectual property rights, or other rights of
          third parties.
        </li>
      </ol>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Intellectual Property
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        The intellectual property in the materials contained in this website are
        owned by or licensed to Book It MATE and are protected by applicable
        copyright and trademark law. We grant our users permission to download
        one copy of the materials for personal, non-commercial transitory use.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        This constitutes the grant of a license, not a transfer of title. This
        license shall automatically terminate if you violate any of these
        restrictions or the Terms of Service, and may be terminated by Book It
        MATE at any time.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        User-Generated Content
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        You retain your intellectual property ownership rights over content you
        submit to us for publication on our website. We will never claim
        ownership of your content but we do require a license from you in order
        to use it.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        When you use our website or its associated services to post, upload,
        share or otherwise transmit content covered by intellectual property
        rights, you grant to us a non-exclusive, royalty-free, transferable,
        sub-licensable, worldwide license to use, distribute, modify, run, copy,
        publicly display, translate or otherwise create derivative works of your
        content in a manner that is consistent with your privacy preferences and
        our Privacy Policy.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        The license you grant us can be terminated at any time by deleting your
        content or account. However, to the extent that we (or our partners)
        have used your content in connection with commercial or sponsored
        content, the license will continue until the relevant commercial or post
        has been discontinued by us.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        You give us permission to use your username and other identifying
        information associated with your account in a manner that is consistent
        with your privacy preferences and our Privacy Policy.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">Liability</h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Our website and the materials on our website are provided on an 'as is'
        basis. To the extent permitted by law, Book It MATE makes no warranties,
        expressed or implied, and hereby disclaims and negates all other
        warranties including, without limitation, implied warranties or
        conditions of merchantability, fitness for a particular purpose, or
        non-infringement of intellectual property, or other violation of rights.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        In no event shall Book It MATE or its suppliers be liable for any
        consequential loss suffered or incurred by you or any third party
        arising from the use or inability to use this website or the materials
        on this website, even if Book It MATE or an authorised representative
        has been notified, orally or in writing, of the possibility of such
        damage.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        In the context of this agreement, &ldquo;consequential loss&rdquo;
        includes any consequential loss, indirect loss, real or anticipated loss
        of profit, loss of benefit, loss of revenue, loss of business, loss of
        goodwill, loss of opportunity, loss of savings, loss of reputation, loss
        of use and/or loss or corruption of data, whether under statute,
        contract, equity, tort (including negligence), indemnity or otherwise.{" "}
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Because some jurisdictions do not allow limitations on implied
        warranties, or limitations of liability for consequential or incidental
        damages, these limitations may not apply to you.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Accuracy of Materials
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        The materials appearing on our website are not comprehensive and are for
        general information purposes only. Book It MATE does not warrant or make
        any representations concerning the accuracy, likely results, or
        reliability of the use of the materials on this website, or otherwise
        relating to such materials or on any resources linked to this website.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">Links</h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Book It MATE has not reviewed all of the sites linked to its website and
        is not responsible for the contents of any such linked site. The
        inclusion of any link does not imply endorsement, approval or control by
        Book It MATE of the site. Use of any such linked site is at your own
        risk and we strongly advise you make your own investigations with
        respect to the suitability of those sites.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Right to Terminate
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        We may suspend or terminate your right to use our website and terminate
        these Terms of Service immediately upon written notice to you for any
        breach of these Terms of Service.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">Severance</h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Any term of these Terms of Service which is wholly or partially void or
        unenforceable is severed to the extent that it is void or unenforceable.
        The validity of the remainder of these Terms of Service is not affected.{" "}
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">Governing Law</h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        These Terms of Service are governed by and construed in accordance with
        the laws of Australia. You irrevocably submit to the exclusive
        jurisdiction of the courts in that State or location.{" "}
      </p>
    </main>
  );
}
