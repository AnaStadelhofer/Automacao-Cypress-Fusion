export function navigeteTypeSign() {
  cy.get(
    "#menu_item_small_45 > .ui-neo-menu-left-item-inner > .ui-neo-menu-left-item-title"
  ).click();
  cy.get(
    "#menu_item_expanded_720 > .ui-neo-menu-left-expanded-item-inner-level2 > .menu-inner-cell-middle > .ui-neo-menu-left-expanded-item-title"
  ).click();
}

export function navigeteGroup() {
  cy.get(
    "#menu_item_small_60 > .ui-neo-menu-left-item-inner > .ui-neo-menu-left-item-title"
  ).click();
  cy.get(
    "#menu_item_expanded_602 > .ui-neo-menu-left-expanded-item-inner-level2 > .menu-inner-cell-middle > .ui-neo-menu-left-expanded-item-title"
  ).click();
  cy.get(
    "#menu_item_expanded_609 > .ui-neo-menu-left-expanded-item-inner-level3 > .menu-inner-cell-middle > .ui-neo-menu-left-expanded-item-title"
  ).click();
}
