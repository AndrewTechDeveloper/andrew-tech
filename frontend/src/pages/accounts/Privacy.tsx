import * as React from 'react'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const PrivacyPage = () => (
  <Container maxWidth="md" className="py-5 min-vh-100">
    <Typography gutterBottom variant="h4" component="h1" className='mb-4'>
      当サイトにおけるプライバシーポリシー
    </Typography>
    <div className='py-4'>
      <Typography gutterBottom variant="h5" component="h2">
        個人情報の利用目的
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        当ブログでは、メールでのお問い合わせ、メールマガジンへの登録などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。
        <br/>
        これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
      </Typography>
    </div>
    <div className='py-4'>
      <Typography gutterBottom variant="h5" component="h2">
        個人情報の第三者への開示
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
        <br/>
        ・本人のご了解がある場合
        <br/>
        ・法令等への協力のため、開示が必要となる場合
        <br/>
      </Typography>
    </div>
    <div className='py-4'>
      <Typography gutterBottom variant="h5" component="h2">
        個人情報の開示、訂正、追加、削除、利用停止
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
      </Typography>
    </div>
    <div className='py-4'>
      <Typography gutterBottom variant="h5" component="h2">
        アクセス解析ツールについて
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        <br/>
        のGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはここをクリックしてください。
      </Typography>
    </div>
    <div className='py-4'>
      <Typography gutterBottom variant="h5" component="h2">
        免責事項
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        <br/>
        当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
        <br/>
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </Typography>
    </div>
    <div className='py-4'>
      <Typography gutterBottom variant="h5" component="h2">
        プライバシーポリシーの変更について
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
        <br/>
        修正された最新のプライバシーポリシーは常に本ページにて開示されます。
      </Typography>
    </div>
  </Container>
)

export default PrivacyPage
