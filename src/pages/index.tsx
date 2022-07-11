import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import {EnvelopeClosedIcon} from '@radix-ui/react-icons'
import {Heading} from 'design-system/Heading'
import {Paragraph} from 'design-system/Paragraph'
import {IconButton} from 'design-system/IconButton'
import {Icon} from 'design-system/Icon'
import {Tooltip} from 'design-system/Tooltip'
import {styled, css} from '../stitches.config'
import {Layout} from '../components/Layout'

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '$3 $4 $3 $4',
  backgroundColor: '#ffffffaa',
  zIndex: '99',
})

const WaveWrapper = styled('div', {
  display: 'inline-block',
  position: 'absolute',
  left: 0,
  width: '100%',
  height: 200,
  verticalAlign: 'middle',
  overflow: 'hidden',
  zIndex: 88,
  variants: {
    position: {
      top: {
        top: -1,
      },
      bottom: {
        bottom: -1,
      },
    },
  },
  defaultVariants: {
    position: 'top',
  },
})

const Svg = styled('svg', {
  position: 'absolute',
  variants: {
    position: {
      top: {
        top: 0,
      },
      bottom: {
        bottom: 0,
      },
    },
  },
  defaultVariants: {
    position: 'top',
  },
})

interface WaveProps {
  position?: 'top' | 'bottom',
}

const Wave = (props: WaveProps) => {
  const {position} = props
  const topPath = 'M0,25 C250,50 250,0 500,25 L500,0 L0,0 Z'
  const bottomPath = 'M500,175 C250,150 250,200 0,175 L0,200 L500,200 Z'
  return (
    <WaveWrapper position={position}>
      <Svg viewBox="0 0 500 200" preserveAspectRatio="xMinYMin meet" position={position}>
        <path
          d={position == 'bottom' ? bottomPath : topPath}
          style={{stroke: 'none', fill: '#ffffffff'}}
        />
      </Svg>
    </WaveWrapper>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Header>
        <Heading css={{fontFamily: '$title'}} size="3">LOOK HOW GOOD MY DOG IS</Heading>
        <Tooltip content="Send Winston a message">
          <IconButton size={{'@initial': '2', '@bp1': '3'}} onClick={() => window.open('mailto:furious.luke@gmail.com')}>
            <Icon size={{'@initial': '1', '@bp1': '2'}}>
              <EnvelopeClosedIcon />
            </Icon>
          </IconButton>
        </Tooltip>
      </Header>
      <main>
        <article>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <div style={{maxWidth: 400}}>
              <Paragraph size="2">
                This is my dog, Winston.
              </Paragraph>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <Wave />
            <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#eee'}}>
              <StaticImage src="../images/side-eyes.jpg" alt="Side eyes" layout="constrained" width={1200} />
            </div>
            <Wave position="bottom" />
          </div>
        </article>
        <article>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <div style={{maxWidth: 400}}>
              <Paragraph size="2">
                He is a very good boy.
              </Paragraph>
            </div>
          </div>
        </article>
        {/*
        <article>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <div style={{maxWidth: 400}}>
              <Paragraph size="2">
                Winston likes to watch airplanes.
              </Paragraph>
            </div>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', position: 'relative', backgroundColor: '#dadada'}}>
            <Wave />
            <StaticImage src="../images/airplane.jpg" alt="Watching planes" width={1000} height={1333} transformOptions={{fit: 'contain'}} />
            <Wave position="bottom" />
          </div>
          </article>
         */}
      </main>
    </Layout>
  )
}

export default IndexPage
