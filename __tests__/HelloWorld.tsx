import React from "react"
import renderer from "react-test-renderer"

import HelloWorld from "../src/components/HelloWorld"

describe("HelloWorld", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HelloWorld />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})