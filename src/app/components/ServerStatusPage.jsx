"use client";

import '@ant-design/v5-patch-for-react-19';

import React, { useState,useMemo } from "react";
import { Card, Button, Typography, Space,Image,Input,Divider,Collapse,Anchor,Carousel,message,Timeline,Avatar, Tooltip} from 'antd';
const { Meta } = Card;
import {
  MenuOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';

const { Search } = Input;
const { Title, Text } = Typography;

import '../css/WaveBackground.css'; // 导入CSS文件用于动画

const WaveBackground = () => {
  return (
    <div className="wave-container">
      <svg className="wave-svg" viewBox="0 0 1440 200" preserveAspectRatio="none">
        {/* 底部波浪 */}
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

        {/* 中间波浪 (透明度稍低，颜色稍浅) */}
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

        {/* 顶部波浪 (透明度更低，颜色更浅) */}
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
      <div id='bg' style={{position: 'absolute',background:"url('./bg.png')",top: 0,left: 0,width: '100%',height: '100%',zIndex: -1,backgroundSize: 'cover',overflow: 'hidden',backgroundRepeat: 'no-repeat'}}></div>
      <nav style={{ marginBottom: '24px',position: 'fixed',display: 'flex',justifyContent: 'space-evenly',alignItems: 'center',zIndex: 2,width: '100%',top: 0,left: 0,backgroundColor: 'rgba(255,255,255, 1)',backdropFilter: 'blur(10px)',boxShadow: '0 1px 4px rgba(0, 21, 41, 0.3)' }}>
            <div style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",marginRight: '20px'}}>
              <img alt='logo' width={'70px'} height={'70px'} src='./logo.png' draggable='false' style={{verticalAlign:"middle"}}></img>
              <Title style={{whiteSpace: 'nowrap',marginLeft: '-5px',display: 'inline-block',alignSelf: 'center',fontSize: '20px',transform: 'translateY(3px)'}} level={3}>服务器联盟</Title>
            </div>
            <div>
              <Search placeholder="搜索" style={{width: "200px",verticalAlign:"middle"}} allowClear />
            </div>
          </nav>
          <nav style={{padding: '10px 0',position: 'fixed',display: 'flex',justifyContent: 'space-evenly',alignItems: 'center',zIndex: 2,width: '100%',top: '60px',left: 0,backgroundColor: 'rgba(255,255,255, 1)',backdropFilter: 'blur(10px)',boxShadow: '0 4px 4px rgba(0, 21, 41, 0.3)' }}>
            <div>
              <Anchor style={{transform: 'translateX(-5px)'}}
                direction="horizontal"
                items={[
                  {
                    key: 'home',
                    href: '#home',
                    title: '首页',
                  },
                  {
                    key: 'list',
                    href: '#list',
                    title: '服务器列表',
                  },
                  {
                    key: 'about',
                    href: '#about',
                    title: '关于我们',
                  },
                  {
                    key: 'sponsor',
                    href: '#sponsor',
                    title: '赞助',
                  },
                ]}
              />
            </div>
            <div>
              <Button type='primary' shape='round' size='large' style={{transform:'translateX(17px)'}}>立刻加入</Button>
            </div>
          </nav>
      <div id='home' style={{width: '100%',height: '100%',position: 'absolute',top: 0,left: 0,zIndex: 1,backdropFilter: 'blur(10px)'}}>
        <div style={{ padding: '24px' }}>
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',textAlign: 'center'}}>
            <Card style={{margin: '0 auto',marginTop: '50px',textAlign: 'center',boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',zIndex: 2,width: '400px'}}>
              <img width={'250px'} height={'250px'} src='./logo.png' alt='logo' draggable='false' style={{margin: '-50px 0',marginBottom: '-70px'}}></img>
              <Divider />
              <Title level={3}>UniMC 服务器联盟</Title>
              <Text style={{marginTop: '20px'}}>一个服务器资源共享和技术共享组织</Text><br/>
              <Button color='primary' variant='solid' style={{marginTop: '15px',marginRight: '10px'}}>申请加入</Button>
              <Button color='primary' variant='outlined' style={{marginTop: '15px'}}>了解更多</Button>
            </Card>
          </div>
          <small style={{position: 'absolute',bottom: '10px',left: '50vw',transform: 'translateX(-50%)',fontSize: '16px',color: 'rgba(0, 0, 0, .8)'}}>👇 往下拉查看更多内容</small>
          <WaveBackground/>
        </div>
      </div>
      <div style={{position:'absolute',top:'calc(100% + 60px)',left:'50%',transform:'translate(-50%,0)',textAlign: 'center',zIndex: -1,backdropFilter: 'blur(10px)',paddingBottom: '100px'}}>
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
              <Button onClick={()=>{window.open('https://www.tacserver.cn/')}} type='primary' shape='round' size='large'>访问茶水晶官网</Button>
              <Button onClick={()=>{
                navigator.clipboard.writeText('631421425')
                  .then(() => {
                    msg.success('已复制');
                  })
                  .catch(() => {
                    msg.error('复制失败');
                  });
              }} style={{marginTop: '10px'}} shape='round' size='large'>复制群号</Button>
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
        <div id='about' style={{width: '100%',height: '60px'}}></div>
        <div>
          <h1 className='title' id='title-red'>关于我们</h1>
          <Title level={3}>联盟历史</Title>
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
          <Title level={3}>主创成员</Title>
          <Space size={'small'}>
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
          <Space size={'small'}>
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
          <Space size={'small'}>
              <Tooltip placement="bottom" title={'alazeprt'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/alazeprt.jpg' alt='alazeprt'></Image>}
              />
            </Tooltip>   
            <Tooltip placement="bottom" title={'归星'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/star.png' alt='归星'></Image>}
              />
            </Tooltip>
            <Tooltip placement="bottom" title={'Redapple_one'} color='#274B93' arrow={mergedArrow}>
              <Avatar
                size={ 100 }
                icon={<Image src='./avatar/redapple.jpg' alt='Redapple_one'></Image>}
              />
            </Tooltip>
          </Space>
          <Title style={{marginTop: '60px'}} level={3}>疑难解答</Title>
          <Collapse size="small" accordion style={{margin: '0 auto',marginTop: '15px',width:"80%",textAlign: 'left'}} items={intro} />
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
