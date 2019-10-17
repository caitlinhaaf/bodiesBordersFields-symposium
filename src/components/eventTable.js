import React from "react"
import moment from 'moment'

const EventTable = ({eventItems, colorClass, hdrClass, ...props}) => {

    return (
        <table>
            <tbody>
                {
                    eventItems.map((item, i) => (
                        <tr key={i}>
                            <td>
                                {moment(item.startTime).local().format(`LT`)}
                                {item.endTime &&
                                    ` to ${moment(item.endTime).local().format(`LT`)}`
                                } 
                                <br/>
                                {item.location}
                            </td>
                            <td className={colorClass}>
                                <h4 className={hdrClass}>{item.itemName}</h4>
                                <p>
                                {item.itemDescription}
                                <br/><br/>
                                {
                                    item.speakers &&
                                    <span>
                                        <span style={{fontWeight: `bold`}}>Speaker(s):</span> {item.speakers}
                                    </span>  
                                }
                                {
                                    item.moderator &&
                                    <>
                                        <br/>
                                        <span>
                                            <span style={{fontWeight: `bold`}}>Moderator:</span> {item.moderator}
                                        </span> 
                                    </> 
                                }
                                
                                </p>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default EventTable
