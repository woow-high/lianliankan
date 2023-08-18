
import Spin from 'antd'
export default function Wait(){
    return (
        <div>
        <Spin tip="Loading" size="large">
        <div className="此过程需要等待一段时间，请稍后～" />
        <div>Tips:10s视频通常需要2-3分钟</div>
      </Spin>
        </div>
    )
}