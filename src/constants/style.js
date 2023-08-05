const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-sectionTitle  xs:leading-[76.8px] leading-[66.8px] w-full",
  headingCard : "font-poppins md:text-[45px] text-[30px] font-medium text-sectionTitle",
  paragraph: "font-poppins font-normal  text-sectionParagraph text-[22px] leading-[32.8px]",


  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-12  px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  input : "flex-1  p-5 rounded-[5px] font-poppins text-[18px] font-medium tracking-[1px]   outline-0  ",
  inputSubject : "flex-1  p-5 rounded-[5px] font-poppins text-[18px] font-medium tracking-[1px]    md:h-[350px] h-[150px] outline-0  ",
  

};

export default styles;