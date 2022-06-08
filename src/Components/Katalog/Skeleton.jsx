import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={334}
    viewBox="0 0 320 334"
    backgroundColor="#2e2e2e"
    foregroundColor="#000000"
    {...props}
  >
    <rect x="-1" y="-2" rx="30" ry="30" width="320" height="258" /> 
    <rect x="0" y="266" rx="0" ry="0" width="320" height="25" /> 
    <rect x="0" y="303" rx="5" ry="5" width="100" height="25" />
  </ContentLoader>
)

export default Skeleton

