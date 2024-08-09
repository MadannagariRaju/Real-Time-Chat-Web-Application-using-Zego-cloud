import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
export default function RoomPage() {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1461491399
        const serverSecret = 'f881610d88662a87619f194df5b75d81'
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,
            Date.now().toString(),
            "raju"
        )
        console.log("kitToken",kitToken)
        const zp =  ZegoUIKitPrebuilt.create(kitToken)
        console.log(zp)
        zp.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name:"copy link",
                    url:`http://localhost:3000/room/${roomId}`  
                }
            ],
            whiteboardConfig: {            
                showAddImageButton: true, 
             },
            showLayoutButton: true,
            layout:"Sidebar",
            showRoomTimer:true,
            showScreenSharingButton: true,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });
    }
    return (
        <div ref={myMeeting}  style={{height:'100vh'}}>
            
        </div>
    )
}
