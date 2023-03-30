import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/image3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import useForm from "../hook/useForm";

export const Contact = () => {
/*   const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  } */


   const formInitialDetails = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      discord: '',
      story: ''
    },
    error: {},
  };

  const { formData, setDynamicFormData, clearForm, isValid } =
    useForm(formInitialDetails);



  //const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

/*   const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  } */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    // let response = await fetch("https://discord.com/api/webhooks/1069562830652715050/bXZqmfaQRXoIMuvfOgnszJ1wx4-yXF1wyIV7pb_tbqNejXa20eewVJWiA-7uQoWtQl5h", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: body
    // });
/*     const req = await axios.post(
      "https://discord.com/api/webhooks/1069562830652715050/bXZqmfaQRXoIMuvfOgnszJ1wx4-yXF1wyIV7pb_tbqNejXa20eewVJWiA-7uQoWtQl5h",
      body
    );
    console.log(req);
    setButtonText("Send");
   // let result = await response.json();
    setFormDetails(formInitialDetails);
    if (req.status === 204) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    } */


    fetch(
      'https://discord.com/api/webhooks/1055824748405334087/iuSxujEk4Zr0L5jX4CIRg9MC3qa07IDlJt0_NGATY7ADTg0vR2VhbdjBiOcf_SirjST9',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // the username to be displayed
          username: 'Ultimat X BOT',
          // the avatar to be displayed
          content:
            '<@&1047970150114132080>',
          // enable mentioning of individual users or roles, but not @everyone/@here
          allowed_mentions: {
            parse: ['users', 'roles'],
          },
          // embeds to be sent
          embeds: [
            {
              // decimal number colour of the side of the embed
              color: 11730954,
              // author
              // - icon next to text at top (text is a link)
              author: {
                name: `Ultimate X RP`,
                icon_url: 'https://cdn.discordapp.com/attachments/899753678725066753/1049025109869998120/ULTX.png',
              },
              // embed title
              // - link on 2nd row
              title: 'Whiteliste request',
              // thumbnail
              // - small image in top right corner.
              thumbnail: {
                url:
                  'https://cdn.discordapp.com/attachments/899753678725066753/1049025109869998120/ULTX.png',
              },
              // embed description
              // - text on 3rd row
              description: `Sender is <@${formData.data.discord}>`,
              // custom embed fields: bold title/name, normal content/value below title
              // - located below description, above image.
              // eslint-disable-next-line no-sparse-arrays
              fields: [
                {
                  name: 'First Name',
                  value: formData.data.firstName,
                },
                {
                  name: 'Last Name',
                  value: formData.data.lastName,
                },
                {
                  name: 'Age',
                  value: formData.data.email,
                },
                {
                  name: 'Story',
                  value: formData.data.story,
                },
              ],
              // image
              // - picture below description(and fields)
             
              // footer
              // - icon next to text at bottom
              footer: {
                text: '@Staff&Support',
                icon_url:
                  'https://cdn.discordapp.com/attachments/899753678725066753/1049025109869998120/ULTX.png',
              },
            },
          ],
        }),
        

      }
      
    
  
    ).then((response) => {
      console.log(response.status); // returns 200
      if (response.status === 204) {
         clearForm();
         //setStatus({ succes: true, message: 'Message sent successfully'});
         alert('Thank You! Your request will be processed very soon')
         setButtonText("Send");
       } else {
         setDynamicFormData(formInitialDetails);
         setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
       }
    });


   /*  setButtonText("Send");
    clearForm(); */
 /*    let result = await response.json();
     console.log(result) */
/*     setDynamicFormData(formInitialDetails);
     if (result.status === 200) {
      clearForm();
       setStatus({ succes: true, message: 'Message sent successfully'});
     } else {
       setDynamicFormData(formInitialDetails);
       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
     }  */
    
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get Your Whitelist</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" value={formData.data.firstName} placeholder="First Name RP" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} />
                  {formData.error.firstName ? (
                <div className="alert alert-danger py-2">
                  {formData.error.firstName}
                </div>
              ) : (
                ""
              )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="lastName" value={formData.data.lastName} placeholder="Last Name RP" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}/>
                  {formData.error.lastName ? (
                <div className="alert alert-danger py-2">
                  {formData.error.lastName}
                </div>
              ) : (
                ""
              )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="email" value={formData.data.email} placeholder="Age RP" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} />
                  {formData.error.email ? (
                <div className="alert alert-danger py-2">
                  {formData.error.email}
                </div>
              ) : (
                ""
              )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="discord" value={formData.data.discord} placeholder="Discord ID" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}/>
                  {formData.error.discord ? (
                <div className="alert alert-danger py-2">
                  {formData.error.discord}
                </div>
              ) : (
                ""
              )}
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="story" value={formData.data.story} placeholder="Story RP" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }}>
                  </textarea>
                  {formData.error.story ? (
                <div className="alert alert-danger py-2">
                  {formData.error.story}
                </div>
              ) : (
                ""
              )}
                      <button type="submit" disabled={!isValid}><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
