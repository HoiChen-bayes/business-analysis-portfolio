# Furniture ordering: rules, stories and test plan

[Case study](02-furniture-ordering.md) · [Portfolio home](README.md)

**Synthetic portfolio examples.** Every product, value, requirement and scenario on this page was created for demonstration. No tests below are claimed as executed user acceptance tests.

## Mini scope

In scope: validate configurable-product combinations, explain restrictions, revalidate submitted orders and retain the applied rule version.

Out of scope: payment processing, manufacturing scheduling, live stock reservation, automated pricing and installation booking. A valid configuration is not a promise of stock availability or delivery timing.

## Example business rules

| Rule | Condition | Result | Customer guidance |
| --- | --- | --- | --- |
| F-R01 | Model Aster, width greater than 220 cm, fabric Linen-L | Reject combination | Choose width 220 cm or below, or a supported alternative fabric |
| F-R02 | Finish Oak-Light combined with legs Chrome-C | Reject combination | Choose a supported leg finish |
| F-R03 | Bundle includes accessory Shelf-S | Require compatible model Aster | Choose the compatible model or remove the accessory |
| F-R04 | Active rule version is unavailable | Do not accept order | Validation is temporarily unavailable; preserve the selections and allow retry |
| F-R05 | Rules change after basket validation | Validate again at submission | If no longer valid, explain the changed restriction before any order is created |

Suggested rule record: rule ID, version, product scope, conditions, result, message, effective-from time, effective-to time and change reference. The business owner and approval method must be agreed with the real organisation; this portfolio does not invent completed approval records.

## User stories and acceptance criteria

### F-US01 · Understand and correct an invalid choice

As a customer configuring furniture, I want a clear explanation of an unsupported combination so that I can choose a valid alternative before placing an order.

- Given Aster with Linen-L at 221 cm, when validation runs, then reject the combination under F-R01 and explain the supported alternatives.
- Given Aster with Linen-L at 220 cm, when validation runs and no other rule fails, then allow the configuration to proceed.
- Given a blocked configuration, when I change only the conflicting choice to a supported value, then preserve my other selections and revalidate the configuration.

### F-US02 · Prevent a stale basket from bypassing a new rule

As a production-review user, I want submitted orders checked against the active rule version so that an earlier basket validation cannot admit a newly invalid combination.

- Given a basket validated under version 1, when version 2 becomes effective before submission, then evaluate the submitted configuration against version 2.
- Given the updated rules reject the configuration, when submission is attempted, then create no order and show the relevant restriction.
- Given the configuration remains valid, when submission succeeds, then retain the rule version used in the order-validation record.

### F-US03 · Distinguish a service failure from a product restriction

As a customer, I want my selections retained when validation is unavailable so that I can retry without rebuilding the configuration.

- Given the rule service is unavailable, when submission is attempted, then create no order and show an availability message rather than claiming the product combination is invalid.
- Given a retry after service recovery, when validation runs, then use the active rules and retain the customer's selections.

## Requirement-to-test traceability

| Test | Rule/story | Scenario | Expected result | Status |
| --- | --- | --- | --- | --- |
| F-T01 | F-R01 / F-US01 | Linen-L at 219 cm | Pass this rule | Designed; not executed |
| F-T02 | F-R01 / F-US01 | Linen-L at exactly 220 cm | Pass this rule | Designed; not executed |
| F-T03 | F-R01 / F-US01 | Linen-L at 221 cm | Block with specific explanation | Designed; not executed |
| F-T04 | F-R02 | Oak-Light with Chrome-C | Block under F-R02 | Designed; not executed |
| F-T05 | F-R03 | Shelf-S with an incompatible model | Block and explain the dependency | Designed; not executed |
| F-T06 | F-R03 | Shelf-S with Aster; other rules satisfied | Pass this rule | Designed; not executed |
| F-T07 | F-R04 / F-US03 | Active rules unavailable | No order; selections retained; retry message | Designed; not executed |
| F-T08 | F-R05 / F-US02 | Basket valid under v1, invalid under active v2 | Reject at submission; identify restriction | Designed; not executed |
| F-T09 | F-R05 / F-US02 | Basket remains valid under active v2 | Accept and record v2 | Designed; not executed |
| F-T10 | F-US01 | Customer changes the conflicting field | Preserve other choices and revalidate | Designed; not executed |

Passing an individual rule does not guarantee the whole configuration is valid: the complete applicable rule set must pass.

## Non-functional requirements to agree

- Explain the error next to the affected choice and make it accessible to keyboard and screen-reader users.
- Record the rule version and reason code needed to investigate a disputed validation outcome.
- Do not permit unauthorised rule changes.
- Agree and measure a validation-response-time target before setting a numerical service commitment.
- Test that repeated submission does not create duplicate orders; the final approach depends on the implementation design.

## Change-impact example

**Proposed change:** increase the synthetic Linen-L width limit from 220 cm to 230 cm.

Before approval, confirm manufacturability with the process owner, establish the effective date and affected product scope, update the customer message, and revise the boundary tests to 229/230/231 cm. Recheck saved baskets and downstream production assumptions. Retain the previous rule version for investigation of earlier orders.

This example shows why changing a number in a table is also a requirements, testing and communication change. No actual manufacturing change or stakeholder approval is claimed.
