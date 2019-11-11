import React from "react"
import moment from 'moment'

const EventTable = ({eventItems, colorClass, hdrClass, ...props}) => {

    return (
        <table>
            <tbody>
                {
                    eventItems.map((item, i) => (
                        <tr key={i}>
                            <td style={{minWidth: `10rem`}}>
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
                                {item.description &&
                                    <>
                                        {item.description}
                                    </>
                                }
                                {item.link &&
                                    <>
                                     <br/>
                                     { item.link.map((link, i) => (
                                        <span>
                                            <a key={i} target="_blank" rel="noopener noreferrer" href={link.linkUrl}>
                                            {link.linkText}
                                            </a>&nbsp;
                                        </span>
                                    ))}
                                    </>   
                                }
                                {
                                    item.speakers &&
                                    <>
                                         <br/><br/>
                                         <span>
                                            <span style={{fontWeight: `bold`}}>Speaker(s):</span> {item.speakers}
                                        </span>
                                    </>
                                      
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
