import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Book It Mate",
  description:
    "We understand that things don't always go as planned. Read our cancellation policy to understand how we can help.",
};

export default function CancellationPolicyPage() {
  return (
    <main className={`container py-20`}>
      <h1 className={`mb-4 text-2xl md:text-3xl font-semibold`}>
        Cancellation Policy
      </h1>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Booking Conditions
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        For bookings made on or after 20<sup>th</sup> October 2021, we advise
        you to consider the risk of Coronavirus (COVID-19) and associated
        government measures. If you don’t book a flexible rate, you may not be
        entitled to a refund. Your cancellation request will be handled by the
        property based on your chosen policy and mandatory consumer law, where
        applicable. During times of uncertainty, we recommend booking an option
        with free cancellation. If your plans change, you can cancel free of
        charge until free cancellation expires.
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Government travel restrictions and advisories
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Please check for travel restrictions before booking and travelling to an
        accommodation. Travel may be permitted only for certain purposes and in
        particular, touristic travel may not be allowed. To help you on your
        way, we will include publicly available links to government websites for
        all Australian States/Territories. If your state/territory is not
        included in this overview it doesn’t mean that no travel restrictions
        are in place and we recommend that you seek out information you are
        planning to travel to. We are not responsible for the content of the
        public (government) websites linked below. Government responses continue
        to evolve, so please check back often for updates and rely on your
        national and local government for the most current information.
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">Refunds</h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Refunds of deposits and fees paid are only available from Hotel Supplier
        &amp; issued based on the Hotel’s cancellation policy, given at time of
        booking, under the following circumstances:
      </p>
      <ol className={`mb-8`}>
        <li
          className={`mb-4 text-sm font-light list-decimal list-inside indent-4`}
        >
          Peak Periods &#8211; Where notice is given at least 30 clear days
          prior to the reservation arrival date of a full or part cancellation a
          full refund will apply under the following terms: Refund of the
          deposit paid less a Administration fee, (definition as per below)
          Where less than 30 days&#8217; notice has been given or for partial
          cancellation no refund will be made. This policy also applies to
          reservation periods crossing the peak period.
        </li>
        <li
          className={`mb-4 text-sm font-light list-decimal list-inside indent-4`}
        >
          Shoulder Periods &#8211; Where notice is given at least 14 days prior
          to reservation arrival date of a full or part cancellation a full
          refund will apply under the following terms: Refund of deposit paid
          less a Administration fee, (definition as per below) Where less than
          30 days&#8217; notice has been given or for partial cancellation no
          refund will be made. This policy also applies to reservations crossing
          the shoulder period.
        </li>
        <li
          className={`mb-4 text-sm font-light list-decimal list-inside indent-4`}
        >
          Off Peak Periods &#8211; Where notice is given at least a clear 72
          hours prior to the reservation arrival date of a full or part
          cancellation a refund will apply under the following terms: Option A:
          Full credit of deposit to a future booking Option B: Refund of deposit
          paid less a Administration fee, (definition as per below) Where less
          than 72 hours notice has been given or for partial cancellation: If
          the site is rebooked Option A maybe applicable If site is not
          rebooked, no refund is made.
        </li>
        <li
          className={`mb-4 text-sm font-light list-decimal list-inside indent-4`}
        >
          Notice given less than 24 hours before check in &#8211; Where notice
          is given less than a clear 24 hours prior to the reservation arrival
          date no refund will be given.
        </li>
        <li
          className={`mb-4 text-sm font-light list-decimal list-inside indent-4`}
        >
          Other refunds/Conditions Group bookings require sixty days notice
          period to cancel a booking. No refunds are available on Specials,
          Facebook specials or promotions. No Refunds or changes are available
          on ANY online bookings. Special short term rates will incur a
          cancellation fee, equivalent to least 1 week.
        </li>
        <li
          className={`mb-4 text-sm font-light list-decimal list-inside indent-4`}
        >
          Minimum booking period refunds Bookings made subject to minimum
          booking conditions cannot be reduced, but can be cancelled and above
          conditions apply. * If a booking crosses 2 seasons then the greater
          fee is applicable. An administration fee will be deducted from all
          refunds made. Guests who depart earlier than their original departure
          date will have the above conditions applied. No shows forfeit all fees
          paid. All Hotel Suppliers reserves the right to cancel bookings for
          &#8216;no shows&#8217; and forfeit any payment. Any money entitled to
          the customer after applying the refund policy may be held in credit
          for a future booking.
        </li>
      </ol>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Reminder to review your cancellation policy
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        <strong> </strong>In light of COVID-19, we want to ensure you understand
        your cancellation policy so you can make informed decisions regarding
        your travel.
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Review Your Cancellation Policy:
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        You should review your booking’s cancellation policy and take action
        during your cancellation window if you’d like to make a change to your
        reservation. Cancellation policies are set by Hotel partners upfront and
        are expected to be honoured. If your cancellation window has ended, you
        should work directly with your booking’s Hotel owner to consider
        rescheduling your stay for a mutually agreed upon future date.
      </p>
      <h3 className="mt-8 mb-2 block text-xl font-semibold">
        Adjust Your Holiday From Your Account:
      </h3>
      <p className={`mb-4 text-sm font-light leading-6`}>
        From your account, open your upcoming reservation to adjust or cancel
        your dates. If you are making changes outside the cancellation policy
        window, please contact the Hotel Supplier for refund options.
      </p>
      <p className={`mb-4 text-sm font-light leading-6`}>
        Visit our help page for FAQs and additional details on our policies and,
        as always, you can manage your booking through your account or contact
        us through the help centre.
      </p>
    </main>
  );
}
