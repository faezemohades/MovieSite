import React, { useState } from 'react';
import { Button,Card ,Modal,Form } from 'react-bootstrap';
import { FaWindowClose } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import Loading from './Loading';
import not from "../assets/image/not.gif";
import useSearch from '../hooks/useSearch';
 
function SearchModal(props) {

    const [fullscreen] = useState(true);
    const { isFetching, isRes, handleSearchInputChange, searchResults } = useSearch(props);

    return (
        <Modal show={props.show} fullscreen={fullscreen}  >
            <Modal.Header className="p-0 border-0">
                <FaWindowClose size={30} color='white' onClick={props.close } style={{ margin: "20px", cursor: "pointer" }} />
            </Modal.Header>
            <Modal.Body>
                <Form className="my-4"   onSubmit={e => e.preventDefault()} className="search-form">
                  <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-center align-items-center " style={{ width: "80vw", marginInline: "20px", background: "white", borderRadius: "5px" }}>
                            <Button type='submit' variant="light" style={{ backgroundColor: "white", border: "0px",paddingInline:"6px",cursor:"auto"}}>
                                <BiSearch size={35} color="purple"  />
                            </Button>
                          <Form.Control
                                type="text"
                                placeholder=""
                                style={{ border: "0px", borderRadius: "5px", boxShadow: 'none', paddingInline: "6px" }}
                                onChange={handleSearchInputChange}
                                autoFocus 
                            />
                      </div>
                    </div>
                    {/*search result goes here*/}
                    {isRes ? (<div className="d-flex justify-content-center align-item-center flex-wrap mt-3" style={{ margin: "0 auto" }}>
                        {isFetching && <><Loading /></>}
                        {searchResults && searchResults.length === 0 && !isFetching && < div style={{ marginTop: "5rem", height: "20vh" }} className="smodal">
                            <div className="d-flex justify-content-center align-item-end mt-3 text-white" >
                                <div className="d-flex justify-content-center align-item-center flex-column " >
                                    <div>   <img src={not} alt="" width="150rem" /></div>
                                    <div> <p style={{ fontSize: "22px" ,paddingRight:"15px"}}> چیزی پیدا نکردم! </p></div>
                                </div>
                            </div>
                        </div>}
                        {searchResults && searchResults.map((result) => (
                            <a href={`/Home/Video/${result.name}/${result.title.replaceAll(/\s+/g, "-").replaceAll('---','-')}`} className="d-flex justify-content-center card-style m-1" key={result.id} >
                                <Card className="searched-card"  >
                                    <Card.Img variant="top" src={result.image} className="img-search" alt={result.title} />
                                    <Card.Body>
                                        <p style={{ fontSize: "15px", lineHeight: "25px", wordBreak: "break-word" }} className="text-break">
                                            {result.title}
                                        </p>
                                    </Card.Body>
                                </Card>
                            </a>
                        ))}
                    </div>) : (
                            <div style={{ marginTop: "5rem", height: "20vh" }} className="smodal">
                                <div className="d-flex justify-content-center align-item-end mt-3 text-white" >
                                    <div >
                                        <p style={{ fontSize: "22px" }}> دنبال چی میگردی؟</p>
                                    </div>
                                </div>
                            </div>
                            )}
                </Form>
          </Modal.Body>
      </Modal>
  );
}

export default SearchModal;