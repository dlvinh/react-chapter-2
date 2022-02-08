import React from 'react';
export default function PhoneInfo(props) {
    let phoneInfo = props.phoneInfoProps;
    return <div className='row'>
        <div className="col-4">
            <h2>{phoneInfo.tenSP}</h2>
            <img className="card-img-top" src={phoneInfo.hinhAnh} alt="Card image cap" />
        </div>
        <div className='col-8'>
            <h2>Description</h2>
            <table className="table text-left">
                <tbody>
                    <tr>
                        <td>Screen Resolution</td>
                        <td>{phoneInfo.manHinh}</td>
                    </tr>
                    <tr>
                        <td >Operation System</td>
                        <td>{phoneInfo.heDieuHanh}</td>
                    </tr>
                    <tr>
                        <td >Front Camera</td>
                        <td>{phoneInfo.cameraTruoc}</td>
                    </tr>
                    <tr>
                        <td>Camera</td>
                        <td>{phoneInfo.cameraSau}</td>
                    </tr>
                    <tr>
                        <td>Ram</td>
                        <td>{phoneInfo.ram}</td>
                    </tr>
                    <tr>
                        <td >Rom</td>
                        <td>{phoneInfo.rom}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>;
}
