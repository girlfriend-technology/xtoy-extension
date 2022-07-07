import * as yup from "yup";

const schema = yup.array().of(
  yup.object().shape({
    enabled: yup.boolean().required(),
    id: yup.mixed().required(),
    links: yup.boolean().required(),
    x: yup.string().required(),
    y: yup.string().required(),
  })
);

const checkConfig = async (data) => await schema.isValid(data);

export default checkConfig;
