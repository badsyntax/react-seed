import React from 'react/addons'
import { expect } from 'chai'

import Menu from '../Menu.jsx'

describe('Menu', () => {
  let { TestUtils } = React.addons

  let menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ]

  describe('Rendering', () => {
    // Here we create a mocked MenuItem component.
    let menu = TestUtils.renderIntoDocument(
      <Menu items={menuItems} />
    )
    let menuElem = React.findDOMNode(menu)
    let items = menuElem.querySelectorAll('li')

    it('Should render the menu items', () => {
      expect(items.length).to.equal(2)
    })

    it('Should render the menu item labels', () => {
      Array.prototype.forEach.call(items, (item, i) => {
        expect(item.textContent.trim()).to.equal(menuItems[i].label)
      })
    })
  })

  describe('Events', (done) => {
    // Example of simulating browser events.
    it('Should handle click events', () => {
      let menu = TestUtils.renderIntoDocument(
        <Menu items={menuItems} />
      )
      let menuElem = React.findDOMNode(menu)
      let items = menuElem.querySelectorAll('li')
      let node = items[0].querySelector('a')

      window.onAlert = function (alertText) {
        expect(alertText).to.equal("ALERT: 'You clicked Option 1'")
        done()
      }

      TestUtils.Simulate.click(node)
    })
  })
})
