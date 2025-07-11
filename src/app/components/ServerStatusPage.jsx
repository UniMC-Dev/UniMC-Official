"use client";
import '@ant-design/v5-patch-for-react-19';

import React, { useState } from "react";
import { Card, Button, Typography, Space,Image,Input,Divider,Collapse,Anchor } from 'antd';
const { Meta } = Card;
import {
  MenuOutlined
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

  return (
    <>
      <div id='bg' style={{position: 'absolute',background:"url('./bg.png')",backdropFilter: 'blur(10px)',top: 0,left: 0,width: '100vw',height: '100vh',zIndex: -1,backgroundSize: 'cover'}}></div>
      <nav style={{ marginBottom: '24px',position: 'fixed',display: 'flex',justifyContent: 'space-evenly',alignItems: 'center',zIndex: 1,width: '100%',top: 0,left: 0,backgroundColor: 'rgba(255,255,255, 1)',backdropFilter: 'blur(10px)',boxShadow: '0 1px 4px rgba(0, 21, 41, 0.3)' }}>
            <div style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",marginRight: '20px'}}>
              <img alt='logo' width={'70px'} height={'70px'} src='./logo.png' draggable='false' style={{verticalAlign:"middle"}}></img>
              <Title style={{whiteSpace: 'nowrap',marginLeft: '-5px',display: 'inline-block',alignSelf: 'center',fontSize: '20px',transform: 'translateY(3px)'}} level={3}>服务器联盟</Title>
            </div>
            <div>
              <Search placeholder="搜索" style={{width: "200px",verticalAlign:"middle"}} allowClear />
            </div>
          </nav>
          <nav style={{padding: '10px 0',position: 'fixed',display: 'flex',justifyContent: 'space-evenly',alignItems: 'center',zIndex: 1,width: '100%',top: '60px',left: 0,backgroundColor: 'rgba(255,255,255, 1)',backdropFilter: 'blur(10px)',boxShadow: '0 4px 4px rgba(0, 21, 41, 0.3)' }}>
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
                    key: 'activity',
                    href: '#activity',
                    title: '活动',
                  },
                ]}
              />
            </div>
            <div>
              <Button type='primary' shape='round' size='large'>立刻加入</Button>
            </div>
          </nav>
      <div id='home' style={{width: '100%',height: '100%',position: 'absolute',top: 0,left: 0,zIndex: -1,backdropFilter: 'blur(10px)'}}>
        <div style={{ padding: '24px' }}>
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',textAlign: 'center'}}>
            <Card style={{margin: '0 auto',marginTop: '50px',textAlign: 'center',boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)'}}>
              <img width={'250px'} height={'250px'} src='./logo.png' alt='logo' draggable='false' style={{margin: '-50px 0',marginBottom: '-70px'}}></img>
              <Divider />
              <Title level={3}>UniMC 服务器联盟</Title>
              <Text style={{marginTop: '20px'}}>欢迎加入 UniMC 服务器联盟，一个服务器资源共享和技术共享组织</Text><br/>
              <Collapse size="small" accordion style={{margin: '0 auto',marginTop: '15px',width:"300px",textAlign: 'left'}} items={intro} />
              <Button color='primary' variant='solid' style={{marginTop: '15px',marginRight: '10px'}}>申请加入</Button>
              <Button color='primary' variant='outlined' style={{marginTop: '15px'}}>了解更多</Button>
            </Card>
          </div>
          <small style={{position: 'absolute',bottom: '10px',left: '50vw',transform: 'translateX(-50%)',fontSize: '16px',color: 'rgba(0, 0, 0, .8)'}}>👇 往下拉查看更多内容</small>
          <WaveBackground/>
        </div>
      </div>
      <div id='list' style={{position:'absolute',top:'calc(100% + 100px)',left:'50%',transform:'translate(-50%,0)',textAlign: 'center',zIndex: -1,backdropFilter: 'blur(10px)',paddingBottom: '100px'}}>
        <h1>服务器列表</h1>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="./mcbucket.png" draggable='false'/>}
        >
          <Meta title="MCBUCKET 服务器" description="QQ群号:868010407" /><br/>
          <Button type='primary' shape='round' size='large'>加入QQ群</Button>
        </Card>
      </div>
    </>
  );
};

export default ServerStatusPage;
