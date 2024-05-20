import Image from 'next/image';
import official_wechat from "/img/contact/official-wechat.jpg";

export function WeChatContact() {
  return (
    <div className="wx-container">
      <div className="wx-center">
        微信扫码关注公众号，开启专属于你的<div className='wx-margin-left-small wx-blue-text'>Ai 新纪元</div> 🎉
      </div>
      <div className="wx-center wx-margin-top-small">
        现在关注，获取最新更新通知，免费解锁更多粉丝专属福利～
      </div>
      <div className="wx-center">
        <Image
          src={official_wechat}
          alt="车神大讲堂-微信公众号"
          width={700}
          height={350}
        />
      </div>

      <style jsx>{`
        .wx-container {
          margin-top: 30px;
          font-weight: 600;
        }
        .wx-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .wx-margin-top-small {
          margin-top: 5px;
        }
        .wx-margin-left-small {
          margin-right: 5px;
          margin-left: 5px;
        }
        .wx-blue-text {
          color: #007BFF;
        }
      `}</style>
    </div>
  );
}
