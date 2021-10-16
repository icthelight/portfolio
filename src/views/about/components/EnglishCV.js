import styled from 'styled-components';
import Section from "../../home/components/shared/Section";

const EnglishCV = () => {
  return (
    <Container>
      <Content>
        I worked as a selling partner support associate at Amazon Services Korea LLC from Jan 2020 to Oct 2020. <br/>
        In my role with Amazon, I was accountable for supporting sellers and maintaining customer satisfaction rate by
        providing professional resolutions.<br/>
        To provide sellers with accurate resolutions, I actively communicated with global teams located in the US, and
        India regarding legal, technical, Amazon policy,<br/> which helped me facilitating problem solving skills.<br/>
        I also improved communication skills which are essential for communicating with the sellers, so that increased
        customer satisfaction rate from 66% to 100% for a month.<br/><br/>

        I worked for Eramet Korea Ltd. for 6 months during maternity leave of an employee of Eramet Korea Ltd.
        I was responsible for handling whole order processing, and helping customers with all their purchasing
        requirements, maintaining a high level of customer service. <br/>This role has made me a professional in dealing
        with customers’ needs, reconciliation between factories and customers, and complaints as I was the replacement
        of sales assistant manager and wholly responsible in this field.<br/>
        I have also developed my administrative skills by creating monthly sales reports. I examined nickel market
        condition such as price investigation and trade statistics to assist in preparing nickel market analysis.<br/>
        <br/><br/>

        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I believe that problem solving, communication skills, and keen attention to customers' needs are quite important to front-end developer.
       <br/> Having accumulated knowledge and experience, I assure that I fit perfectly for becoming a successful employee in
        your company.<br/><br/>

        I am a passionate, patient and responsible person to learn anything which is requested for my job in the
        company.<br/>
        I am a cooperative person with outstanding interpersonal skills, which I believe is the most important thing in
        a teamwork.<br/>

        I am available for interview at any time, and I can commence work immediately.<br/><br/>

        I’ll be looking forward to hearing from you.

      </Content>
    </Container>
  )
}

const Container = styled(Section)`

`;

const Content = styled.div`
  padding: 0 40px;
  font-size: 18px;
  line-height: 27px;
`;
export default EnglishCV;
