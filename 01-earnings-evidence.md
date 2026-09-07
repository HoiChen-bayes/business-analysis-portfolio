# Earnings workflow: requirements and validation examples

[Case study](01-earnings-workflow.md) · [Portfolio home](README.md)

These selected examples explain controls in the retained research report. Example identifiers in this file use the `EX-` prefix and are new portfolio references. They do not replace the original pack's identifiers. Any proposed test is labelled separately from an observed result.

## Selected requirements

| ID | Priority | Requirement | Acceptance condition |
| --- | --- | --- | --- |
| EX-R01 | Must | Record the fixed universe, start date and cut-off before calculation | A reviewer can identify the scope and reproduce the same selection rules |
| EX-R02 | Must | Map each usable announcement to a reaction trading day | Before-open and after-close cases follow the documented calendar rules |
| EX-R03 | Must | Exclude events with unknown or intraday timing from the primary calculation | The event remains traceable with an exclusion reason |
| EX-R04 | Must | Preserve missing-history disclosures; do not impute absent events | Actual and target coverage are visible for each company |
| EX-R05 | Must | Calculate adjusted close-to-close return consistently | Return equals reaction adjusted close divided by previous adjusted close, minus one |
| EX-R06 | Must | Retain and flag absolute returns of at least 15% | The event remains eligible if otherwise valid, with a manual-review flag |
| EX-R07 | Must | Preserve a route from reported result to source and formula | A reviewer can follow event identity, dates, rule, formula and source reference |

## One story in detail

**EX-US01 — A reviewable timing exception**

As an analyst reviewing earnings-event results, I want ambiguous announcement timing to be visible so that I do not interpret an unsupported reaction date as a validated result.

**Acceptance criteria**

- Given a record whose release session is unknown, when eligibility is assessed, then exclude it from the primary analysis and record the reason.
- Given an excluded event, when the review output is opened, then show its identity and exclusion reason rather than deleting the record.
- Given a later correction to its release session, when the event is recalculated, then preserve the previous decision and document the correction in the proposed change log.

The correction log above is a design requirement. It is not a claim that a production change workflow was deployed.

## Traceability and test examples

| Requirement | Test | Input or scenario | Expected result | Evidence status |
| --- | --- | --- | --- | --- |
| EX-R02 | EX-T01 | Before-open announcement on a trading day | Use that trading day | Proposed representative scenario |
| EX-R02 | EX-T02 | After-close announcement before a weekend or market holiday | Use the next actual trading day, not the next calendar day | Proposed representative scenario |
| EX-R03 | EX-T03 | Unknown release session | Exclude and preserve the reason | Original report records one unknown/intraday exclusion; scenario not independently rerun here |
| EX-R04 | EX-T04 | One observed event against an eight-event target | Show 1/8 and leave the other seven absent | Recorded SNDK coverage in original report |
| EX-R05 | EX-T05 | Synthetic adjusted closes of 100 and 115 | Return equals 15% | Illustrative arithmetic; not an original market observation |
| EX-R06 | EX-T06 | Synthetic return exactly +15% or −15% | Retain and flag both boundary cases | Proposed boundary tests |
| EX-R06 | EX-T07 | Synthetic absolute return of 14.99% | Do not trigger this threshold flag | Proposed boundary test |
| EX-R07 | EX-T08 | Select a reported event result | Locate the matching dates, source and formula | Proposed reviewer walkthrough |

## Definitions a reviewer needs

| Term | Meaning |
| --- | --- |
| Reaction date | Trading day chosen by the announcement-session rule |
| Primary return | Reaction adjusted close / previous trading-day adjusted close − 1 |
| Eligible event | Event with permitted timing and the required price inputs |
| Review flag | A request for investigation; it does not itself mean the observation is wrong |
| Coverage | Observed events relative to the stated target, with gaps disclosed |

## Change-impact example

If users propose reducing the review threshold from 15% to 10%, I would identify the affected requirement, revise the boundary tests, quantify the additional review workload, check the dashboard wording and record the decision before changing the rule. This is a proposed BA response, not a recorded stakeholder request.
