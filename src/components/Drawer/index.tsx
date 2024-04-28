import { Drawer } from "antd";

interface DrawerPageProps {
  onClose: () => void;
  open: boolean; 
}

export default function DrawerPage({ onClose, open }: DrawerPageProps) {
  return (
    <>
      <Drawer
        title=""
        onClose={onClose}
        open={open}
        placement="left"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
