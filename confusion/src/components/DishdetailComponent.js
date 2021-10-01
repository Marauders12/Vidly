import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Modal, Button, ModalBody, ModalHeader, Col, Row, Label} from 'reactstrap';
import { Control, LocalForm, Errors,} from 'react-redux-form';
import { addComment } from '../redux/ActionCreaters';
import {LoadingComponent, Loading} from '../redux/LoadingComponent'

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.image} />
                        <CardTitle>{dish.name}</CardTitle>
                        <CardBody>{dish.description}</CardBody>
                    </Card>
                </div>
            )
        }
        else
        {
            return(
                <div>
                <Form model= "feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3),maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors className="text-danger"
                                         model=".firstname"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength : 'Must be greater than 2 characters',
                                             maxLength: 'Must be 15 characters or less'
                                         }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength:minLength(3),maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors className="text-danger"
                                         model=".lastname"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength : 'Must be greater than 2 characters',
                                             maxLength: 'Must be 15 characters or less'
                                         }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength:minLength(3),maxLength: maxLength(15),
                                            isNumber
                                        }}
                                         />
                                          <Errors className="text-danger"
                                         model=".telnum"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength : 'Must be greater than 2 numbers',
                                             maxLength: 'Must be 15 numbers or less',
                                             isNumber: 'Must be numbers'
                                         }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required, validEmail
                                            
                                        }}
                                        />
                                        <Errors className="text-danger"
                                         model=".email"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             validEmail: 'Invalid Email address'
                                         }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                 /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form></div>
            )
        }
    }
    function RenderComments({comments, dishId , addComment}){
        if(comments!=null){
                    const comnt = comments.map(comment => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>--{comment.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                                }).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </li>

                            )
                    })
                    return(
                        <div className="col-12 col-md-5 m-1">
                        <h4><b> Comments </b></h4>
                        <ul className="list-unstyled">
                            {comnt} 
                        </ul>  
                        <CommentForm dishId={dishId} 
                        addComment={addComment} />
                        </div>  
                        
                    )  
        }  
    else 
    {
        return(
            <div></div>
        )
    }
}
    const Dishdetail= (props) => {
        const dish=props.dish;
    if(props.isLoading)
    return(
        <div className="container">
            <div className="row">
                <Loading/>
            </div>
        </div>
    );
    else if(props.errMess)
    return(
        <div className="container">
            <div className="row">
                <h4>{props.errMess}</h4>
            </div>
        </div>
    );
    else if(dish!=null)
        return(
            <div className="container">
                 <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}
                        </BreadcrumbItem>
                        
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments}
                addComment={props.addComment}
                dishId={props.dish.id}
                />
                </div>
            </div>
        );
    }

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {

        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span>Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row  className="form-group">
                                <Label for="rating" md={12}>Rating</Label>
                                <Col  md={12}>
                                    <Control.select defaultValue="5" model=".rating" id="rating" name="rating" className="form-control" >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author"  md={12}>Your Name</Label>
                                <Col  md={12}>
                                    <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                    <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="feedback"  md={12}>Your feedback</Label>
                                <Col  md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" resize="none" rows="6" className="form-control" validators={{ required }} />
                                    <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                </Col>
                            </Row>

                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

export default Dishdetail;
