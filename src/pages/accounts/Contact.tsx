import * as React from 'react'
import Container from '@material-ui/core/Container'

const ContactPage = () => (
  <Container maxWidth="md" className="p-4 min-vh-100">
    <iframe
      title="問合せフォーム"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfnON4U36cagK_BHCq_C45Fxepk1VkxK0qiDRe3LZiT8qxIeA/viewform?embedded=true"
      width="100%"
      height="1100px"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
    >
      読み込んでいます…
    </iframe>
  </Container>
)

export default ContactPage
