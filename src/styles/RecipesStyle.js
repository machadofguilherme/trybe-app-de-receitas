import styled from 'styled-components';

const RecipesStyle = styled.section`
  .div-btn-filters {
    display: flex;
    flex-flow: row wrap;
    gap: 5px;
    /* align-content: space-around;
    justify-content: space-around; */
    margin: 20px 0 0 50px;
  }

  .div-btn-filters button {
    height: 30px;
    width: 27%;
    overflow: hidden;
  }

  .div-recipe {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    margin: 20px;
  }

  .div-recipe img {
    width: 150px;
  }
`;

export default RecipesStyle;
