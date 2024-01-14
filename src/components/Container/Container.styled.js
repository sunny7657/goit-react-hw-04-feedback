import styled from 'styled-components';

export const Container = styled('div')(() => {
  return {
    maxWidth: '100%',
    paddingTop: '15px',
    paddingLeft: '15px',

    h2: {
      color: '#28432d',
      fontSize: '28px',
      marginTop: '15px',
      marginBottom: '15px',
      fontWeight: '500',
    },
    h3: {
      color: '#28432d',
      fontSize: '20px',
      marginTop: '45px',
      fontWeight: '400',
    },
    button: {
      marginRight: '20px',
      backgroundColor: '#96a752',
      border: '2px solid #5d6732',
      borderRadius: '5px',
      color: '#101a12',
      padding: '10px 20px',
      fontSize: '20px',
      cursor: 'pointer',
      transitionDuration: '0.4s',
    },
    'button:hover': {
      boxShadow:
        '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
    },
    p: {
      fontSize: '20px',
      color: '#101a12',
      marginTop: '8px',
      marginBottom: '8px',
    },
  };
});
