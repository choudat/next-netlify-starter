import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import homePage from './homePage'
import expertise from './expertise'
import legalPage from './legalPage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homePage,
    expertise,
    legalPage
  ])
})
