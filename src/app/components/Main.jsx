"use client";

import '@ant-design/v5-patch-for-react-19';

import React, { useState,useMemo,useEffect } from "react";
import { Card, Button, Typography, Space,Image,Input,Divider,Collapse,Anchor,Carousel,message,Timeline,Avatar, Tooltip} from 'antd';
const { Meta } = Card;
import {
  MenuOutlined,
  ClockCircleOutlined,
  GithubOutlined,
  QqOutlined,
  BilibiliOutlined,
  CheckSquareOutlined
} from '@ant-design/icons';

const { Search } = Input;
const { Title, Text } = Typography;

import '../css/WaveBackground.css';
import { Footer } from 'antd/es/layout/layout';
const WaveBackground = () => {
  return (
    <div className="wave-container">
      <svg className="wave-svg" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path
          className="wave-path wave-bottom"
          d="M0,160 Q360,100 720,160 T1440,160 V200 H0 Z"
        >
          <animate
            attributeName="d"
            values="M0,160 Q360,100 720,160 T1440,160 V200 H0 Z;
                    M0,160 Q360,180 720,160 T1440,160 V200 H0 Z;
                    M0,160 Q360,100 720,160 T1440,160 V200 H0 Z"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        <path
          className="wave-path wave-middle"
          d="M0,170 Q360,120 720,170 T1440,170 V200 H0 Z"
        >
          <animate
            attributeName="d"
            values="M0,170 Q360,120 720,170 T1440,170 V200 H0 Z;
                    M0,170 Q360,190 720,170 T1440,170 V200 H0 Z;
                    M0,170 Q360,120 720,170 T1440,170 V200 H0 Z"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        <path
          className="wave-path wave-top"
          d="M0,180 Q360,140 720,180 T1440,180 V200 H0 Z"
        >
          <animate
            attributeName="d"
            values="M0,180 Q360,140 720,180 T1440,180 V200 H0 Z;
                    M0,180 Q360,200 720,180 T1440,180 V200 H0 Z;
                    M0,180 Q360,140 720,180 T1440,180 V200 H0 Z"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

const intro = [
  {
    key: '1',
    label: 'UniMC 是什么？',
    children: <p>一个为 Minecraft 服务器提供资源共享和技术共享的组织</p>,
  },
  {
    key: '2',
    label: 'UniMC 能干什么？',
    children: <p>提供免费或低价的机房共享服务器资源，服务器技术支持，以及网络安全维护保障</p>,
  },
  {
    key: '3',
    label: '加入联盟需要的条件是什么？',
    children: <p>纯公益或半公益，接受共享技术和资源安排</p>,
  },
];

const ServerStatusPage = () => {
  const [msg, contextHolder] = message.useMessage();
  const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  
  return (
    <>
      {contextHolder}
      <div id='bg' style={{position: 'fixed',background:"url('./bg.png')",top: 0,left: 0,width: '100%',height: '100%',zIndex: -1,backgroundSize: 'cover',overflow: 'hidden',backgroundRepeat: 'no-repeat'}}></div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
          background: 'radial-gradient(circle at 100% 0,hsla(0, 0%, 100%, 0.93) 0,hsla(0, 0%, 96%, 0.88) 183%)',
          backdropFilter: 'blur(15px) saturate(86%)',
          WebkitBackdropFilter: 'blur(15px) saturate(86%)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 统一阴影
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '60px',
          }}
        >
          <div
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              marginRight: '20px',
              marginTop: '10px',
            }}
          >
            <img
              alt="logo"
              width="70px"
              height="70px"
              src="./logo.png"
              draggable="false"
              style={{ verticalAlign: 'middle' }}
            />
            <Title
              level={3}
              style={{
                whiteSpace: 'nowrap',
                marginLeft: '-5px',
                display: 'inline-block',
                alignSelf: 'center',
                fontSize: '20px',
                transform: 'translateY(3px)',
              }}
            >
              服务器联盟
            </Title>
          </div>
          <div style={{marginTop: '10px',}}>
            <Search
              placeholder="搜索"
              style={{ width: '200px', verticalAlign: 'middle' }}
              allowClear
            />
          </div>
        </nav>

        <nav
          style={{
            padding: '10px 0',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <div>
            <Anchor
              style={{ transform: 'translateX(-3.5px)' }}
              direction="horizontal"
              items={[
                { key: 'home', href: '#home', title: '首页' },
                { key: 'list', href: '#list', title: '服务器列表' },
                { key: 'about', href: '#about', title: '关于我们' },
                { key: 'sponsor', href: '#sponsor', title: '赞助' },
              ]}
            />
          </div>
          <div>
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{ transform: 'translateX(17px)' }}
              onClick={() => {
                location.href = '#join';
              }}
            >
              立刻加入
            </Button>
          </div>
        </nav>
      </div>
      <div id='home' style={{width: '100%',height: '100%',position: 'absolute',top: 0,left: 0,zIndex: 1}}>
        <div style={{ padding: '24px' }}>
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',textAlign: 'center'}}>
            <Card style={{margin: '0 auto',marginTop: '50px',textAlign: 'center',boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',zIndex: 2,width: '400px'}}>
              <img width={'250px'} height={'250px'} src='./logo.png' alt='logo' draggable='false' style={{margin: '-50px 0',marginBottom: '-70px'}}></img>
              <Divider />
              <Title level={3}>UniMC 服务器联盟</Title>
              <Text style={{marginTop: '20px'}}>一个服务器资源共享和技术共享组织</Text><br/>
              <Button onClick={()=>{location.href='#join'}} color='primary' variant='solid' style={{marginTop: '15px',marginRight: '10px'}}>申请加入</Button>
              <Button onClick={()=>{window.open('https://status.zhanglao8.fun/')}} color='primary' variant='outlined' style={{marginTop: '15px'}}>服务状态</Button>
            </Card>
          </div>
          <small onClick={()=>{ const targetScroll = window.innerHeight + 60;window.scrollTo({ top: targetScroll, behavior: 'smooth' });}} id='down-text'>👇 探索 UniMC</small>
          {/* <WaveBackground/> */}
        </div>
      </div>
      <div style={{position:'absolute',top:'calc(100%)',background:'#fff',left:'50%',transform:'translate(-50%,0)',textAlign: 'center',zIndex: -1,backdropFilter: 'blur(10px)'}}>
          <div id='list' style={{height:'150px',width:'100%'}}></div>
          <div>
            <h1 className='title' style={{margin:'0'}}>服务器列表</h1>
            <Title level={5} style={{marginTop: '5px'}}>（排名不分前后）</Title>
            <Card
              hoverable
              style={{ width: 240,display: 'inline-block',marginLeft: '10px',marginRight: '10px',marginTop: '20px' }}
              cover={<img alt="example" src="./icon/mcbucket.png" draggable='false'/>}
            >
              <Meta title="MCBUCKET 公益服" description="纯公益多玩法服务器" /><br/>
              <Button onClick={()=>{window.open('https://www.mcbucket.dpdns.org')}} type='primary' shape='round' size='large'>访问麦桶官网</Button>
              <Button onClick={()=>{window.open('https://qm.qq.com/cgi-bin/qm/qr?k=ya2U74u0Mrci1hstIiz-aoOlBiDbrT6c&jump_from=webapi&authKey=IOZDCcQgFaHR1MUDF32lqKQCLhXE5DC3E65/ZcP65ZX5wo1N3gbo1VV005vyqElN')}} style={{marginTop: '10px'}} shape='round' size='large'>一键加群</Button>
            </Card>
            <Card
              hoverable
              style={{ width: 240,display: 'inline-block',marginLeft: '10px',marginRight: '10px' ,marginTop: '20px' }}
              cover={<img alt="example" src="./icon/mclume.png" draggable='false'/>}
            >
              <Meta title="MCLUME 服务器" description="纯公益运营五载" /><br/>
              <Button onClick={()=>{window.open('https://www.mcpool.net/')}} type='primary' shape='round' size='large'>访问麦熙官网</Button>
              <Button onClick={()=>{window.open('https://qm.qq.com/cgi-bin/qm/qr?k=B3OM7rvZNk8egVipmSmwu0Gde0KaDP46&jump_from=webapi&authKey=fDCN+hVIVb8gaD7rjHtbTmPuYJ8efn0TQ4eO6NFj9F+wLnr1Ms7iEIrVt3uric1x')}} style={{marginTop: '10px'}} shape='round' size='large'>一键加群</Button>
            </Card>
            <Card
              hoverable
              style={{ width: 240,display: 'inline-block',marginLeft: '10px',marginRight: '10px' ,marginTop: '20px' }}
              cover={<img alt="example" src="./icon/tacs.svg" draggable='false'/>}
            >
              <Meta title="茶水晶 TACS" description="着眼创新，放眼未来" /><br/>
              <Button onClick={()=>{window.open('https://tacs.top/')}} type='primary' shape='round' size='large'>访问茶水晶官网</Button>
              <Button onClick={()=>{
                navigator.clipboard.writeText('tacserver.com')
                  .then(() => {
                    msg.success('已复制');
                  })
                  .catch(() => {
                    msg.error('复制失败');
                  });
              }} style={{marginTop: '10px'}} shape='round' size='large'>复制外服地址</Button>
            </Card>
            <Card
              hoverable
              style={{ width: 240,display: 'inline-block',marginLeft: '10px',marginRight: '10px' ,marginTop: '20px' }}
              cover={<img alt="example" src="./icon/bjx.png" draggable='false'/>}
            >
              <Meta title="北极星生存服" description="一个新兴服务器" /><br/>
              <Button  onClick={() => {
                navigator.clipboard.writeText('3558847968')
                  .then(() => {
                    msg.success('已复制');
                  })
                  .catch(() => {
                    msg.error('复制失败');
                  });
              }}
                type='primary' shape='round' size='large'>加腐竹好友</Button>
                <Button onClick={()=>{
                  navigator.clipboard.writeText('北极星生存服')
                  .then(() => {
                    msg.success('已复制');
                  })
                  .catch(() => {
                    msg.error('复制失败');
                  });
                }} style={{marginTop: '10px'}} shape='round' size='large'>复制名称</Button>
            </Card>
            <Title level={3} style={{marginTop: '60px',whiteSpace: 'nowrap'}}>联盟画廊</Title>
            <Image width={'200px'} style={sscss} preview={false} src='./ss/ss1.png' draggable='false'></Image>
            <Image width={'200px'} style={sscss} preview={false} src='./ss/ss2.png' draggable='false'></Image>
            <Image width={'200px'} style={sscss} preview={false} src='./ss/ss3.png' draggable='false'></Image>
            <Image width={'200px'} style={sscss} preview={false} src='./ss/ss4.png' draggable='false'></Image>
        </div>
        <Divider style={{marginTop: '60px'}}></Divider>
        <div id='about' style={{width: '100%',height: '150px'}}></div>
        <div style={{margin:"0 auto",maxWidth:'80%'}}>
          <h1 className='title' id='title-red'>关于我们</h1>
          <Title level={3} style={{marginTop: '20px'}}>联盟历史</Title>
           <Timeline
            style={{marginTop: '30px'}}
            mode="alternate"
            items={[
              {
                children: '创建 UniMC 联盟 的构想被提出 2023-2-17',
              },
              {
                children: '初代联盟正式运行，吸纳了4个成员服 2023-5-12',
                color: 'green',
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                children: `主创服务器发生 521 事件，联盟局势陷入混乱 2023-5-21~25`,
              },
              {
                color: 'red',
                children: '初代联盟解散，计划被搁置 2023-5-26',
              },
              {
                children: '在艰难的局势下重新建立 新 UniMC 联盟 2025-5-18',
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                children: '截至今日，累计有5个服务器加入 UniMC 联盟组织',
              },
            ]}
          />
          <Card title="组织理念" style={about_css}>
            <p>UniMC以技术为决定构成因素，属服务器联合技术组织，责任囊括服务器维护支持，网络安全支持以及各类网络保障支持</p>
            <p>目前由两个主创服务器和多个加盟服务器构成</p>
            <p>坚持公益运作，不接受任何圈钱和资本行为</p>
            <p> UniMC 联盟的目标是为广大腐竹和组织提供一个良好的技术交流平台，让腐竹能够在一个平台上找到志同道合的同志，共同进步</p>
          </Card>
          <Image src='./logo_.png' alt='logo' draggable='false' preview={false} style={{borderRadius: '12px',width: '100px',height: '100px',boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',position:'relative',top: '-45px',left: '200px',transform: 'translateX(-50%)',background:'#fff'}}></Image>
          <Title level={3}>主创成员</Title>
          <Space style={spaceCenter_css} size={'small'} wrap>
              <Tooltip placement="bottom" title={'Xiaozhe Nice'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/xiaozhenice.png' alt='Xiaozhe Nice'></Image>}
              />
            </Tooltip>   
            <Tooltip placement="bottom" title={'Zhanglao8'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/zhanglao8.png' alt='Zhanglao8'></Image>}
              />
            </Tooltip>
            <Tooltip placement="bottom" title={'补糖醇酸奶_'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/webyogurt.png' alt='Zhanglao8'></Image>}
              />
            </Tooltip>
          </Space>
          <Title style={{marginTop: '60px'}} level={3}>在任管理</Title>
          <Space style={spaceCenter_css} size={'small'} wrap>
              <Tooltip placement="bottom" title={'Koshca_'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/koshca.png' alt='Xiaozhe Nice'></Image>}
              />
            </Tooltip>   
            <Tooltip placement="bottom" title={'Bili_Emo'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/biliemo.png' alt='Zhanglao8'></Image>}
              />
            </Tooltip>
            <Tooltip placement="bottom" title={'凉'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/liang.png' alt='Zhanglao8'></Image>}
              />
            </Tooltip>
            <Tooltip placement="bottom" title={'CHAT-AoNie'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/CHATAoNie.png' alt='Zhanglao8'></Image>}
              />
            </Tooltip>
          </Space>
          <Title style={{marginTop: '60px'}} level={3}>技术顾问</Title>
          <Space style={spaceCenter_css} size={'small'}  wrap>
              <Tooltip placement="bottom" title={'alazeprt'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/alazeprt.jpg' alt='alazeprt'></Image>}
              />
            </Tooltip>   
            <Tooltip placement="bottom" title={'Redapple_one'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/redapple.jpg' alt='Redapple_one'></Image>}
              />
            </Tooltip>
          </Space>
          <Title style={{marginTop: '80px'}} level={2}>疑难解答</Title>
          <Collapse size="small" accordion style={{margin: '0 auto',marginTop: '15px',width:"80%",textAlign: 'left',maxWidth: '500px'}} items={intro} />
        </div>
        <Divider style={{marginTop: '60px'}}></Divider>
        <div style={{height: '150px',width: '100%',}} id='sponsor'></div>
        <div style={{margin:'0 auto',maxWidth:'80%'}}>
          <h1 className='title' id='title-green'>赞助通道</h1>
          <b>由于我们是纯公益组织，没有任何收入来源，故我们需要更多的支持来维持运营<br/>若您有意赞助我们，请加入我们的特定支援群</b><br/>
          <Space style={{marginTop: '50px'}} size={'large'}>
            <Image style={pay_css} src='./qr/sponsor.jpg' alt='群二维码' width={200}/>
          </Space>
          <p style={{marginTop: '50px'}}>
            <b>若您想要为我们提供技术和硬件支持，也可以申请加群</b><br/>
            <Button color='primary' variant='outlined' size='large' shape='round' style={{marginTop: '15px'}}
            onClick={()=>{
              navigator.clipboard.writeText('1055233109')
              .then(() => {
                msg.success('已复制');
              })
              .catch(() => {
                msg.error('复制失败');
              });
            }}>复制QQ群号</Button>
          </p>
        </div>
        <Divider style={{marginTop: '60px'}}></Divider>
        <div style={{height: '150px',width: '100%',}} id='join'></div>
        <div>
          <h1 className='title' id='title-golden'>加入我们</h1>
          <img id='join-logo' src="./logo_.png" alt="logo" width={200} draggable='false' style={{marginTop: '50px',marginBottom: '50px',border: '1px solid #274B93',boxShadow: '0 0 50px rgba(0, 0, 0, 0.1)',borderRadius: '12px',overflow: 'hidden'}}/>
          <br />
          <Tooltip placement="bottom" title={'请务必详细解释入群理由'} color='blue' arrow={mergedArrow}>
            <Button color='blue' variant='outlined' size='large' style={{marginLeft: '10px',marginRight: '10px'}} 
            onClick={()=>{
              navigator.clipboard.writeText('1058655479')
              .then(() => {
                msg.success('群号已复制');
              })
              .catch(() => {
                msg.error('群号复制失败');
              });
            }}><QqOutlined /> 加入官方QQ群</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={'请点击 Star 后加入官方QQ群，获取加入 GitHub 组织资格'} color='red' arrow={mergedArrow}>
             <Button color='red' variant='outlined' size='large' style={{marginLeft: '10px',marginRight: '10px'}}
             onClick={()=>{window.open('https://github.com/UniMC-Dev')}}><GithubOutlined /> GitHub</Button>
          </Tooltip>
        </div>
        <div style={{marginTop: '100px'}}></div>
        <div style={footer_css}>
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:'100%'}}>
              <div style={{verticalAlign:'middle'}}>
                <Image src='./logo.png' alt='logo' draggable='false' preview={false} width={100}></Image>
              </div>
              <div style={{color:'#000'}}>
                <b>© 2023-2025 Universal Minecraft.</b>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',height:'100%',marginTop:'-20px',paddingBottom:'20px'}}>
              <div>
                <Space>
                  <Avatar
                    size={ 40 }
                    icon={<BilibiliOutlined />}
                    style={{background:'rgba(247, 151, 162, 1)',color:'#fff',cursor:'pointer'}}
                    onClick={()=>{window.open('https://space.bilibili.com/593367813')}}
                  />
                  <Avatar
                    size={ 40 }
                    icon={<QqOutlined/>}
                    style={{background:'#00a1d6',color:'#fff',cursor:'pointer'}}
                    onClick={()=>{
                      navigator.clipboard.writeText('1058655479')
                      .then(() => {
                        msg.success('群号已复制');
                      })
                      .catch(() => {
                        msg.error('群号复制失败');
                      });
                    }}
                  />
                  <Avatar
                    size={ 40 }
                    icon={<GithubOutlined/>}
                    style={{background:'#24292e',color:'#fff',cursor:'pointer'}}
                    onClick={()=>{window.open('https://github.com/UniMC-Dev')}}
                  />
                </Space>
              </div>
              <div style={{color:'#000',transform:'translateX(16px)'}}>
                <a id='icp' href="https://icp.gov.moe/?keyword=20250236" draggable='false' target="_blank"><CheckSquareOutlined /> 萌ICP备20250236号</a>
              </div>
              <style jsx>{
                  `#icp{
                    text-decoration:none;
                    color:#000;
                    transition:all 0.24s ease;
                  }#icp:hover{
                    color:#274B93;
                    text-shadow:0 0 10px #274b9375;
                  }`
                }
              </style>
            </div>
        </div>
      </div>
    </>
  );
};

export default ServerStatusPage;

const sscss = {
  margin: '10px 0',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  borderRadius: '5px',
  overflow: 'hidden',
};

const about_css = {
  margin:'0 auto',
  width: 350,marginTop: '50px',textAlign: 'center',textAlign:'left',
  boxShadow: '0 0 50px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
}

const pay_css = {
  margin: '0 auto',
  width: 200,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  borderRadius: '8px',
  overflow: 'hidden',
}

const footer_css = {
  width: '100vw',
  lineHeight: '50px',
  background: '#f9f9f9',
  color: '#fff',
  textAlign: 'center',
  fontSize: '16px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
}

const spaceCenter_css = {width: '100%',display: 'flex',justifyContent: 'center'}
