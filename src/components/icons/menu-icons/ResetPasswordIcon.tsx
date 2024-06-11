import { SvgIcon, SvgIconProps } from '@mui/material';

const ResetPasswordIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 1024 1024"
      style={{
        verticalAlign: 'middle',
        fill: 'none',
        overflow: 'hidden',
        padding: '1px',
      }}
    >
      <path
        d="M332.8 814.08c-51.2 0-92.16-40.96-92.16-87.04v-179.2c0-51.2 40.96-92.16 92.16-92.16h40.96v-102.4c0-76.8 61.44-138.24 138.24-138.24 76.8 0 138.24 61.44 138.24 138.24v102.4h35.84c51.2 0 92.16 40.96 92.16 92.16v179.2c0 51.2-40.96 87.04-92.16 87.04H332.8z m0-302.08c-20.48 0-35.84 15.36-35.84 35.84v179.2c0 20.48 15.36 35.84 35.84 35.84h348.16c20.48 0 35.84-15.36 35.84-35.84v-179.2c0-20.48-15.36-35.84-35.84-35.84H332.8z m256-56.32v-102.4c0-46.08-35.84-81.92-81.92-81.92-40.96 0-76.8 35.84-76.8 81.92v102.4h158.72z"
        fill="currentColor"
      />
      <path
        d="M512 1024C235.52 1024 10.24 798.72 10.24 522.24S235.52 20.48 512 20.48c117.76 0 225.28 40.96 317.44 112.64L808.96 35.84c0-5.12 0-15.36 5.12-20.48 5.12-10.24 10.24-15.36 15.36-15.36h5.12c10.24 0 25.6 10.24 25.6 20.48l35.84 184.32v5.12c0 15.36-10.24 25.6-20.48 25.6l-184.32 35.84h-5.12c-10.24 0-25.6-10.24-25.6-20.48 0-5.12 0-15.36 5.12-20.48 5.12-5.12 10.24-10.24 15.36-10.24l133.12-25.6c-81.92-76.8-189.44-117.76-302.08-117.76-245.76 0-445.44 199.68-445.44 445.44s199.68 445.44 445.44 445.44c245.76 0 445.44-199.68 445.44-445.44 0-30.72 0-56.32-5.12-81.92 0-10.24 0-15.36 5.12-20.48 0-10.24 5.12-15.36 15.36-15.36h5.12c15.36 0 25.6 10.24 30.72 25.6 5.12 30.72 10.24 61.44 10.24 92.16-5.12 276.48-230.4 501.76-506.88 501.76z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default ResetPasswordIcon;