import React from 'react'
// import PropTypes from 'prop-types'

const Heading = ({headingClass,headingName}) => {
  return (
    <h1 className={`${headingClass} text-hyperclor dark:text-amber-600`}>{headingName}</h1>
  )
}

// Heading.propTypes = {

// }

export default Heading
