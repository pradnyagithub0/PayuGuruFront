import React from "react";
import CopyButtonIcon from "./CopyButtonIcon";
import QRCodeButton from "./QRCodeIcon";

import {
  IconBuildingBank,
  IconCashBanknote,
  IconCoin,
  IconCreditCard,
  IconReceipt,
  IconReceiptRefund,
  IconReceiptTax,
  IconRepeat,
  IconReport,
} from "@tabler/icons-react";
import {
  Anchor,
  Card,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import classes from "./ActionsGrid.module.css";

const VirtualAccPopUp = ({ data, onClose }) => {
    const theme = useMantineTheme();
  const handleCopy = () => {
    navigator.clipboard.writeText(data.AC_id);
    alert("UPI ID copied to clipboard!");
  };

  return (
    <div className="gridViewUPI">
      <div className="popup-item">
        <strong>UPI ID</strong>
        <span
          style={{
            wordWrap: "break-word",
            wordBreak: "break-all",
            textAlign: "center", // Optional: Center-align the text
          }}
        >
          {data.AC_id}
        </span>
      </div>

      <div className="popup-item">
        <CopyButtonIcon
          data={data.AC_id === data.AC_id ? data.AC_id : ""}
          style={{
            BackgroundColor: "#f8dcdc !important",
            color: "blackv!important",
          }}
        />
      </div>
      <div className="popup-item">
        <strong>Report</strong>
      </div>

      <div className="popup-item">
        <strong>Statement</strong>
      </div>
      <div className="popup-item">
        <strong>Invoice</strong>
      </div>

      <div className="popup-item">
        <strong>Balance</strong>
      </div>
      <div className="popup-item">
        <strong>Revenue</strong>
      </div>

      {/* <Card withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text className={classes.title}>Services</Text>
        <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor>
      </Group>
      <SimpleGrid cols={3} mt="md">
        <UnstyledButton className={classes.item}>
          <IconCreditCard color={theme.colors["violet"]} size={32} />
          <Text size="xs" mt={7}>
            ACC 
          </Text>
        </UnstyledButton>
        <UnstyledButton className={classes.item}>
          <IconCashBanknote color={theme.colors["violet"]} size={32} />
          <Text size="xs" mt={7}>
            ACC 
          </Text>
        </UnstyledButton>
      </SimpleGrid>
    </Card> */}

      {/* Close Button */}
      <button className="close-Btn" onClick={onClose}>
        Close
      </button>
    </div>
    
  );
};

export default VirtualAccPopUp;
