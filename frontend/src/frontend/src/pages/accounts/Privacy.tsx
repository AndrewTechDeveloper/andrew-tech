import * as React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const PrivacyPage = () => (
  <Container maxWidth="md" className="py-5 min-vh-100">
    <Typography gutterBottom variant="h5" component="h1" className="mb-4">
      当サイトにおけるプライバシーポリシー
    </Typography>
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>個人情報の利用目的</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            当ブログでは、メールでのお問い合わせ、メールマガジンへの登録などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。
            <br />
            これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>個人情報の第三者への開示</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            <br />
            ・本人のご了解がある場合
            <br />
            ・法令等への協力のため、開示が必要となる場合
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>個人情報の開示、訂正、追加、削除、利用停止</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>アクセス解析ツールについて</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
            <br />
            のGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはここをクリックしてください。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>免責事項</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
            <br />
            当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
            <br />
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>プライバシーポリシーの変更について</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
            <br />
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  </Container>
)

export default PrivacyPage
